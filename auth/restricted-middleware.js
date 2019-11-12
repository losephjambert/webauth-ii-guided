module.exports = (req, res, next) => {
  // use the session functionality
  if (req.session && req.session.username) {
  } else {
    res.status(401).json({ message: `You shall not pass!` });
  }
};
