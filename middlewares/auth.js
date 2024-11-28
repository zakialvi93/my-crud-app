const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if the Authorization header exists and starts with "Bearer"
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied, token missing or invalid' });
  }

  const token = authHeader.split(' ')[1]; // Extract the token after "Bearer"

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info from token to the request
    next(); // Proceed to the next middleware/route
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authenticate;
