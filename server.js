var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

//Require models for syncing
var db = require('./models');

//Set static public folder
app.use(express.static('public'));

// Setup body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// View engine
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes/Controllers
require('./controllers/html-controller.js')(app);
require('./controllers/users-controller.js')(app);
require('./controllers/ballots-controller.js')(app);
require('./controllers/bets-controller.js')(app);

// Initialize app
db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
		console.log('App initialized on port: ' + PORT);
	});
});