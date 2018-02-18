// ============================================
// HTML Controller - for sending HTML routes
// ============================================

// Dependencies
var path = require('path');
var db = require('../models');
var passport = require('passport');

// Routes
module.exports = function(app) {

	// Straight HTML routes
	app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'../public/betparty.html')));
	app.get('/test',(req,res)=>res.sendFile(path.join(__dirname,'../public/test.html')));
	app.post('/test/new/:name',(req,res)=>db.Test.create({test_name:req.params.name}).then(dbTest=>res.json('dbTest')));

	// Authentication Routes
	app.get('/auth/twitter/callback',
		passport.authenticate('twitter', { failureRedirect: '/login'}),
		function(req,res){
			res.redirect('/');
		});

	// Handlebars routes
	app.get('/steve', (req,res)=>{
		var hbsObject = {
			user: req.user
		};
		res.render('index',hbsObject);
	});
};