// ============================================
// HTML Controller - for sending HTML routes
// ============================================

// Dependencies
var path = require('path');
var db = require('../models');

// Routes
module.exports = function(app) {
	app.get('/test',(req,res)=>res.sendFile(path.join(__dirname,'../public/test.html')));
	app.post('/test/new/:name',(req,res)=>db.Test.create({test_name:req.params.name}).then(dbTest=>res.json('dbTest')));
};