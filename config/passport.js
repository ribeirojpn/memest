var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var mongoose = require('mongoose');

module.exports = function() {
  var User = mongoose.model('User');

  passport.use(new TwitterStrategy({
    consumerKey: 'VM9vQ9iD7ky6kp9VzqfBSloT2',
    consumerSecret: 'IlZdZ7HvNbbLxIkRERwqZwBqzsgJpXAxI7VhX3tqz9IeCeHrPQ',
    callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
  }, function(token, tokenSecret, profile, done) {
    User.findOrCreate(
      {'login':profile.username},
      {'name':profile.displayName,
       'photo': profile.photos[0].value},function(erro,user) {
         if(erro){
           console.log(erro);
           return done(erro);
         }
         return done(null,user);
       });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id).exec().then(function (user) {
      done(null,user);
    });
  });
};
