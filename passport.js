var TWITTER_CONSUMER_KEY = 'bF6jhxfDKlwDnSXvR5FDquoqm';
var TWITTER_CONSUMER_SECRET = 'Jas6Fyfq0lHIOI5WpvlkgNjT58RKkx6jURInHJOU3uG6GqAszM';
var passport = require('passport')
var TwitterStrategy = require('passport-twitter').Strategy;
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:3000/callback"
  },
  function(token, tokenSecret, profile, done) {
    passport.session.id = profile.id;

    // tokenとtoken_secretをセット
    profile.twitter_token = token;
    profile.twitter_token_secret = tokenSecret;

    process.nextTick(function () {
        return done(null, profile);
    });
  }
));
module.exports = {passport: passport};
