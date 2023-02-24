const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const dot = require('dotenv').config();

CLIENT_ID="753718326428-8fg7551745gknkvhpdltpuvushbitf61.apps.googleusercontent.com";
CLIENT_SECRET="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";


passport.use(new GoogleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
	scope: ["profile", "email",],
  },
  function (accessToken, refreshToken, profile, callback) {
	callback(null, profile);
  console.log(profile);
	}
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id, username: profile.id }, function (err, user) {
//       return cb(err, user);
//     });	
//   }
));
// passport.use(
// 	new GoogleStrategy(
// 		{
// 			clientID: CLIENT_ID,
// 			clientSecret: CLIENT_SECRET,
// 			callbackURL: "/auth/google/callback",
// 			scope: ["profile", "email",],
// 						userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",

// 			response_type: "application/json"
// 		},
// 		function (accessToken, refreshToken, profile, callback) {
// 			callback(null, profile);
// 		}
// 	)
// );


passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});