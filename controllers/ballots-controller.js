// ============================================
// Ballots Controller - API routes for Ballots table
// ============================================

// Dependencies
var path = require('path');
var db = require('../models');

// Routes
module.exports = function(app) {
    // GET route and HTML display of ballots
    app.get('/ballots',(req,res)=>{
        db.Ballot.findAll({
            include: [
                {model: db.Bet}
            ]
        })
        .then(dbBallot=>{
        console.log('##########BEFORE',dbBallot);
        if(req.user){
            // console.log('####Debug Current User:',req.user.id);
            for (var i = 0; i < dbBallot.length; i++) {
                var isSubmitted = false;
                for (var j = 0; j < dbBallot[i].dataValues.Bets.length; j++) {
                    console.log(dbBallot[i].dataValues.Bets[j].dataValues.UserId);
                    if(req.user.id === dbBallot[i].dataValues.Bets[j].dataValues.UserId) {
                        isSubmitted = true;
                    }
                }
                dbBallot[i].dataValues.submitted = isSubmitted;
                dbBallot[i]._previousDataValues.submitted = isSubmitted;
            }
        }
        console.log('##########AFTER',dbBallot);
        var hbsObject = {
            user: req.user,
            ballots: dbBallot
        };
        res.render('ballots',hbsObject);
        });
        
    });

    app.get('/ballots/:id',(req,res)=>{
        db.Ballot.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbBallot=>{
            console.log('Getting single ballot:',dbBallot);
            var hbsObject = {
                user: req.user,
                ballots: dbBallot
            };
            res.render('ballots-single',hbsObject);
        });
    });

    app.get('/ballot-submitted',(req,res)=>{
        var hbsObject = {
            user: req.user
        };
        res.render('ballot-submitted',hbsObject);
    });
    

    // GET route to return all ballots
    app.get('/api/ballots', (req, res) => db.Ballot.findAll({}).then(dbBallot => res.json(dbBallot)));

    // GET route to search for ballots
    // Example, to get non-expired ballots go to /api/ballots/search/?expired=false
    app.get('/api/ballots/search', (req, res) => db.Ballot.findAll({where: req.query}).then(dbBallot => res.json(dbBallot)));

    app.post('/api/ballots', function(req, res) {
        db.Ballot.create({
            name: req.body.name,
            expired: req.body.expired,
            expire_dt: req.body.expire_dt,

            bet_text_1: req.body.bet_text_1,
            bet_answer_1: req.body.bet_answer_1,

            bet_text_2: req.body.bet_text_2,
            bet_answer_2: req.body.bet_answer_2,

            bet_text_3: req.body.bet_text_3,
            bet_answer_3: req.body.bet_answer_3,

            winning_user_id: req.body.winning_user_id,
            total_right: req.body.total_right
        }).then(function(dbBallot) {
            res.json(dbBallot);
        });
    });

    // PUT route to update ballots
    app.put('/api/ballots', function(req, res) {
        db.Ballot.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }
        ).then(function(dbBallot) {
            res.json(dbBallot);
        });
    });
};