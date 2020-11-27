const User = require('../models/User');
module.exports = {
  async create(req, res) {
    try {
      res.send('TODO: user > create');
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async read(req, res) {
    try {
      res.send ('TODO: user > read');
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async show(req, res) {
    try {
      res.send('TODO: user > show');
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async update(req, res) {
    try {
      res.send('TODO: user > update');
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async delete(req, res) {
    try {
      res.send('TODO: user > delete');
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
