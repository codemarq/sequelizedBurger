// ==================================================================================
// dependencies
// ==================================================================================

// require express
var express = require('express');
// initiate router
var router = express.Router();

// require the burger.js file
var burger = require('../models/burger.js');

// ==================================================================================
// ROUTES
// ==================================================================================

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

// route to handle select all
router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {

		var hbsObject = { 
			burgers: data
		};

		// console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// route to handle adding a new burger
router.post('/burgers/insert', function (req, res) {
	burger.insertOne(['burger_name'], [req.body.burger_name], function () {
		res.redirect('/burgers');
	});
});

// route to handle updating a burger (devouring it)
router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	// console.log('condition', condition);

	burger.updateOne({devoured: true}, condition, function () {
		res.redirect('/burgers');
	});
});

// export router
module.exports = router;