const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  if (/* if there is a user inside req.session */) {
    // proceed
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};
