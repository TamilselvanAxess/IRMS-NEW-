// Middleware to normalize email addresses
const normalizeEmail = (req, res, next) => {
  // Check if email exists in request body
  if (req.body && req.body.email) {
    // Convert email to lowercase and trim whitespace
    req.body.email = req.body.email.toLowerCase().trim();
  }
  
  next();
};

export default normalizeEmail; 