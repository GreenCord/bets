// Dependencies and Requirements
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;

var PORT = process.env.PORT || 3000;

var app = express();

//Require models for syncing
var db = require('./models');

//Set static public folder
app.use(express.static('public'));

// Setup body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Initialize passport and session persistence

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
passport.serializeUser(function(user,cb){
	cb(null, user);
});

passport.deserializeUser(function(obj,cb){
	cb(null,obj);
});

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({secret: 'keyboard cat', resave: true, saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());


// View engine
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes/Controllers
require('./controllers/html-controller.js')(app);
require('./controllers/users-controller.js')(app);
require('./controllers/ballots-controller.js')(app);
require('./controllers/bets-controller.js')(app);

// Initialize app
db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log('App initialized on port: ' + PORT);
	});
});