module.exports = function(passport){
	var Strategy = require('passport-twitter').Strategy;
	var db = require('../models');

	// Configure the Twitter strategy for use by Passport.
	passport.use(new Strategy({
		consumerKey: process.env.CONSUMER_KEY,
		consumerSecret: process.env.CONSUMER_SECRET,
		callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
	},
	function(token, tokenSecret, profile, cb){
		console.log('DB Hooking: ', profile);

		db.User.findOne({
			where: {
				username: profile.username
			}
		}).then(dbUser=>{
			console.log('DB Hooking finding user:',dbUser);
			console.log('Looking for:',profile.username);
			if (!dbUser) {
				console.log('User doesn\'t exist, we should add user.');
				db.User.create({
					username: profile.username,
					admin: false
				}).then(dbNewUser=>{
					console.log('User added!',dbNewUser);
					return cb(null,dbNewUser);
				});
			} else {
				console.log('User found!',dbUser);
				return cb(null,dbUser);
			}
			
			throw Error('Something went wrong looking for the user.');

		});

	}));

	// Configure Passport authenticated session persistence.

	passport.serializeUser(function(user,cb){
		console.log('Serializing user',user);
		cb(null, user);
	});

	passport.deserializeUser(function(obj,cb){
		console.log('Deserializing user',obj);
		cb(null,obj);
	});

};