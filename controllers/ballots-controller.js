// ============================================
// Ballots Controller - API routes for Ballots table
// ============================================

// Dependencies
var path = require('path');
var db = require('../models');

// Routes
module.exports = function(app) {
	app.get('/api/ballots',(req,res)=>db.Ballot.findAll({}).then(dbBallot=>res.json(dbBallot)));

	app.post('/api/ballots', function(req, res) {
		db.Ballot.create({
			name: req.body.name,
            expired: req.body.expired,
            expire_dt: req.body.expire_dt,

            bet_text_1: req.body.bet_text_1,
            bet_options_1: req.body.bet_options_1,
            bet_answer_1: req.body.bet_answer_1,

            bet_text_2: req.body.bet_text_2,
            bet_options_2: req.body.bet_options_2,
            bet_answer_2: req.body.bet_answer_2,

            bet_text_3: req.body.bet_text_3,
            bet_options_3: req.body.bet_options_3,
            bet_answer_3: req.body.bet_answer_3,

            winning_user_id: req.body.winning_user_id,
            total_right: req.body.total_right
		}).then(function(dbBallot) {
			res.json(dbBallot);
		});
	});
};