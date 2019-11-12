const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

const sessionConfig = {
  name: 'ladygaga',
  secret: 'make it a little long and keep it safe!',
  cookie: {
    maxAge: 1000 * 60 * 60, // you need it if the cookie is to survive !!
    secure: false, // with secure, the cookie only gets set when https !!
    httpOnly: false,
  },
  resave: false,
  saveUninitialized: false,
}

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.json({ api: 'up' });
});

module.exports = server;
