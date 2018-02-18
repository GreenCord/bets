module.exports = function(passport){
	var Strategy = require('passport-twitter').Strategy;
	// Configure the Twitter strategy for use by Passport.
	//
	// OAuth 1.0-based strategies require a `verify` function which receives the
	// credentials (`token` and `tokenSecret`) for accessing the Twitter API on the
	// user's behalf, along with the user's profile.  The function must invoke `cb`
	// with a user object, which will be set at `req.user` in route handlers after
	// authentication.
	passport.use(new Strategy({
		consumerKey: process.env.CONSUMER_KEY,
		consumerSecret: process.env.CONSUMER_SECRET,
		callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
	},
	function(token, tokenSecret, profile, cb){
		// TODO - connect to db
		console.log('DB Hooking: ', profile);
		return cb(null, profile);
	}));

	// Configure Passport authenticated session persistence.
	//
	// In order to restore authentication state across HTTP requests, Passport needs
	// to serialize users into and deserialize users out of the session.  In a
	// production-quality application, this would typically be as simple as
	// supplying the user ID when serializing, and querying the user record by ID
	// from the database when deserializing.  However, due to the fact that this
	// example does not have a database, the complete Twitter profile is serialized
	// and deserialized.

	// no db version
	passport.serializeUser(function(user,cb){
		cb(null, user);
	});

	passport.deserializeUser(function(obj,cb){
		cb(null,obj);
	});

};