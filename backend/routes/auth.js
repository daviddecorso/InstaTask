const router = require("express").Router();
const passport = require("passport");

// Get user info on successful login
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

// Error on login fail
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate.",
  });
});

// Redirect on logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000");
});

// Authenticate with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

// Redirect to home page after successful login
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "/auth/login/failed",
  })
);

module.exports = router;
