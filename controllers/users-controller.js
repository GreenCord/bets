// ============================================
// Users Controller - API routes for Users table
// ============================================

// Dependencies
var path = require('path');
var db = require('../models');

// Routes
module.exports = function(app) {
	app.get('/api/users',(req,res)=>db.User.findAll({}).then(dbUser=>res.json(dbUsers)));
};