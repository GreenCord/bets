// ============================================
// Users Controller - API routes for Users table
// ============================================

// Dependencies
var path = require('path');
var db = require('../models');

// Routes
module.exports = function(app) {
    // GET route to get all users
    app.get('/api/users', (req, res) => db.User.findAll({}).then(dbUser => res.json(dbUser)));

    // POST route to create a new user
    app.post("/api/users", function(req, res) {
        db.User.create({
            user_name: req.body.user_name,
            admin: req.body.admin
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    // PUT route to update users (change admin status)
    app.put("/api/users", function(req, res) {
        db.User.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
};