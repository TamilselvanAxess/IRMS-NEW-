import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import dotenv from "dotenv";
import { sendPasswordResetEmail, sendPasswordResetConfirmation } from "../services/emailService.js";

dotenv.config();

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    const isMatch = user && (await bcrypt.compare(password, user.password));
    if (!user || !isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.username || user.name,
        email: user.email,
      },
      token: generateToken(user),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json({
      message: "User retrieved successfully",
      user: {
        id: user._id,
        name: user.username || user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Initiate forgot password - send reset email
export const initiatePasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      // Don't reveal if email exists or not for security
      return res.status(200).json({ 
        message: "If an account with that email exists, we have sent a password reset link." 
      });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    
    // Hash token and save to database
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpire = Date.now() + 60 * 60 * 1000; // 1 hour

    await user.save();

    // Send email
    try {
      const emailResult = await sendPasswordResetEmail(email, resetToken);
      console.log("Email sent successfully:", emailResult.previewUrl);
      
      res.status(200).json({ 
        message: "Password reset email sent successfully!",
        // Always include preview URL for testing
        previewUrl: emailResult.previewUrl
      });
    } catch (emailError) {
      // Reset the token fields if email fails
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();
      
      console.error("Failed to send email:", emailError);
      res.status(500).json({ message: "Failed to send password reset email" });
    }
  } catch (error) {
    console.error("Password reset initiation error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Reset password with token
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Token invalid or expired" });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update user
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    // Send confirmation email
    try {
      await sendPasswordResetConfirmation(user.email);
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Don't fail the password reset if confirmation email fails
    }

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Password reset error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Legacy function name for backward compatibility
export const forgetPassword = resetPassword;
