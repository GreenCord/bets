// ============================================
// Bets Controller - API routes for Bets table
// ============================================

// Dependencies
var path = require('path');
var db = require('../models');

// Routes
module.exports = function(app) {
    // GET route to return all bets
    app.get('/api/bets', (req, res) => db.Bet.findAll({}).then(dbBet => res.json(dbBet)));

    // GET rout to search for bets
    // Example: search for user 1's bets is /api/bets/search/?user_id=1
    app.get('/api/bets/search', (req, res) => db.Bet.findAll({where: req.query}).then(dbBet => res.json(dbBet)));

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

    app.put("/api/bets", function(req, res) {
        db.Bet.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbBet) {
            res.json(dbBet);
        });
    });
};