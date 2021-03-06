const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const passportSetup = require("./config/passportSetup");
const cookieSession = require("cookie-session");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json());
// Initialize cookie-session
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    secret: process.env.COOKIE_KEY,
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Successfully connected to MongoDB.");
});

// Use routes
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
const eventRoutes = require("./routes/events");
app.use("/events", eventRoutes);

// Check to see if the user is authenticated
const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated",
    });
  } else {
    next();
  }
};

// If login was successful, send the profile response
// otherwise, send a 401 response that the user is not authenticated
app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies,
  });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
