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

    // GET route to search for users
    // Example: To search for admin users /api/users/search/?admin=true
    app.get('/api/users/search', (req, res) => db.User.findAll(req.query).then(dbUser => res.json(dbUser)));

    // POST route to create a new user
    app.post("/api/users", function(req, res) {
        db.User.create({
            username: req.body.user_name,
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