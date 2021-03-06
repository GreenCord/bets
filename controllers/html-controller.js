// ============================================
// HTML Controller - for sending HTML routes
// ============================================

// Dependencies
var path = require('path');
var db = require('../models');
var passport = require('passport');

// Routes
module.exports = function(app) {
	app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
	// Straight HTML routes
	// app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'../public/betparty.html')));
	// app.get('/test',(req,res)=>res.sendFile(path.join(__dirname,'../public/test.html')));
	// app.post('/test/new/:name',(req,res)=>db.Test.create({test_name:req.params.name}).then(dbTest=>res.json('dbTest')));
	app.get('/cards',(req,res)=>res.sendFile(path.join(__dirname,'../public/cards.html')));
	app.get('/results',(req,res)=>res.sendFile(path.join(__dirname,'../public/results.html')));

	
	// Handlebars & authentication routes
	app.get('/', (req,res)=>{
		var hbsObject = {
			user: req.user
		};
		res.render('index',hbsObject);
	});

	app.get('/login', (req,res)=>res.render('login'));

	// Authentication Routes
	app.get('/login/twitter',
		passport.authenticate('twitter'));

	app.get('/auth/twitter/callback',
		passport.authenticate('twitter', { failureRedirect: '/login'}),
		function(req,res){
			res.redirect('/ballots');
		}
	);

	};

	