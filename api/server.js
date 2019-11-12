const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

const server = express();

const sessionConfiguration = {
  name: "booger",
  secret: process.env.COOKIE_SECRET || "is it secret? is it safe?",
  cookie: {
    maxAge: 1000 * 60 * 60, // valid 1 hour in millis
    secure: process.env.NODE_ENV === "development" ? false : true, // do we send cookie over https only?
    httpOnly: true // prevent client JavaScript code from accessing the cookie
  },
  resave: false, // save sessions even when they have not changed
  saveUninitialized: true // read about it in the docs in regards to GDPR -- make this configurable based on user input
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfiguration));

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up", session: req.session });
});

module.exports = server;
