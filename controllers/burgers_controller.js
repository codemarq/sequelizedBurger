// ==================================================================================
// dependencies
// ==================================================================================

// require express
var express = require('express');
// initiate router
var router = express.Router();

// and we bring in our models folder. This brings in the model's object, as defined in index.js
var models = require('../models');

var Burgers = require('../models')["burgers"];
// extract our sequelize connection from the models object, to avoid confusion
var sequelizeConnection = models.sequelize

// ==================================================================================
// ROUTES
// ==================================================================================

router.get('/', function (req, res) {
	res.redirect('/burgers');
});


// We run this query so that we can drop our tables even though they have foreign keys
// sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// make our tables
// note: force:true drops the table if it already exists
// .then(function(){
// sequelizeConnection.sync({force:true});




// route to handle select all
router.get('/burgers', function (req, res) {
	Burgers.findAll({}).then(function(data) {

		var burgersObject = {burgers:data};

		// console.log(hbsObject);
		res.render('index', burgersObject);
	});
});


// route to handle adding a new burger
router.post('/burgers/insert', function (req, res) {
	Burgers.create({burger_name: req.body.burger_name}).then(function () {
		res.redirect('/burgers');
	});
});

// route to handle updating a burger (devouring it)
router.put('/burgers/update/:id', function (req, res) {
	var condition = req.params.id;

	Burgers.update({devoured: true}, {where: {id: condition}})
	.then(function(){
		res.redirect('/burgers');
	});
});

// export router
module.exports = router;