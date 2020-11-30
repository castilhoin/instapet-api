const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
module.exports = {
  async auth(req, res) {
    try {
      const { email, password } = req.body;
      if (!email) {
        return res
          .status(400)
          .json({ message: "You need to provide an email." });
      }
      if (!password) {
        return res
          .status(400)
          .json({ message: "You need to provide your password." });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User does not exist." });
      }
      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password." });
      }
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 86400,
      });
      return res.json({ loggedUserId: user._id, token });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
