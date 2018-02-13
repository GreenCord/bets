// ============================================
// Bets Controller - API routes for Bets table
// ============================================

// Dependencies
var path = require('path');
var db = require('../models');

// Routes
module.exports = function(app) {
	app.get('/api/bets',(req,res)=>db.Bet.findAll({}).then(dbBet=>res.json(dbBet)));
};