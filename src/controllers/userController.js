const User = require('../models/User');
module.exports = {
  async create(req, res) {
    try {
      const {
        email,
        password,
        passwordCheck,
        username,
        firstName,
        lastName
      } = req.body;
      if (!email || !password || !passwordCheck || !username || !firstName || !lastName) {
        return res
          .status(400)
          .json({ message: "Please fill the required fields." });
      }
      if (password.length < 8) {
        return res
          .status(400)
          .json({ message: "Password must have at least 8 characters." });
      }
      if (password !== passwordCheck) {
        return res.status(400).json({ message: "Passwords does not match." });
      }
      const existingUsername = await User.findOne({ username });
      if (existingUsername) {
        return res
          .status(400)
          .json({ message: "Username already taken." });
      }
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        return res
          .status(400)
          .json({ message: "An account with this email already exists." });
      }
      const passwordHash = password;
      const user = new User({
        email,
        passwordHash,
        username,
        firstName,
        lastName
      });
      await user.save();
      return res.json(user);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  async read(req, res) {
    try {
      const users = await User.find({});
      return res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      return res.json(user);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  async update(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body, 
        { runValidators: true, new: true }
      );
      return res.json(user);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  async delete(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.json({});
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
