const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/user.model");
require("dotenv").config({ path: __dirname + "/../.env" });

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      // associate account with record in database
      await User.findOne({ id: profile.id }).then((currentUser) => {
        if (currentUser) {
          // user exists
          done(null, currentUser);
        } else {
          // create user
          new User({
            id: profile.id,
            displayName: profile.displayName,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);
