import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;