// ============================================
// Bets Controller - API routes for Bets table
// ============================================

// Dependencies
var path = require('path');
var db = require('../models');

// Routes
module.exports = function(app) {
    app.get('/api/bets', (req, res) => db.Bet.findAll({}).then(dbBet => res.json(dbBet)));

    app.post('/api/bets', function(req, res) {
        db.Bet.create({
            user_id: req.body.user_id,
            ballot_id: req.body.ballot_id,
            
            user_answer_1: req.body.user_answer_1,
            answer_truth_1: req.body.answer_truth_1,

            user_answer_2: req.body.user_answer_2,
            answer_truth_2: req.body.answer_truth_2,

            user_answer_3: req.body.user_answer_3,
            answer_truth_3: req.body.answer_truth_3,
        }).then(function(dbBet) {
            res.json(dbBet);
        });
    });
};