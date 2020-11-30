const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      return res.status(401).json({ message: "You need to be authenticated." });
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.status(401).json({ message: "Authorization denied." });
    }
    req.loggedUserId = verified._id;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
