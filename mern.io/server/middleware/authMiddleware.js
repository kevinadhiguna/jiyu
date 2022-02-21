const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check :
  // - if authorization header in request exists
  // - if a JWT exists in authorization header and starts with : "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      /**
       * Let's say token format: "Bearer eyJhbGci.eyJzdWI.SflKx"
       *
       * (1) .split(" ") makes it : ["Bearer", "eyJhbGci.eyJzdWI.SflKx"]
       * (2) [1] takes "eyJhbGci.eyJzdWI.SflKx"
       */
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.sign(token, process.env.JWT_SECRET);

      // Get user data without including password
      req.user = await User.findById(decoded.id).select("-password");

      // next() allows one to call another middleware function
      next();
    } catch (errorProtect) {
      console.error(errorProtect);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, please login first..");
  }
});

module.exports = { protect };
