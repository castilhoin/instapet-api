module.exports = {
  async read(req, res) {
    try {
      return res.send('Your timeline.');
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
