// ============================================
// Ballots Controller - API routes for Ballots table
// ============================================

// Dependencies
var path = require('path');
var db = require('../models');

// Routes
module.exports = function(app) {
	app.get('/api/ballots',(req,res)=>db.Ballot.findAll({}).then(dbBallot=>res.json(dbBallot)));
};