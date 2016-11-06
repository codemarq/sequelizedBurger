'use strict';

// User model (to create our bulk insert for local db)
var Burgers = require('../models')["burgers"];

module.exports = {
  up: function (queryInterface, Sequelize) {
    // seed the burgers db with burgers
    return Burgers.bulkCreate([
        {burger_name: "Whopper"},
        {burger_name: "Big Mac"},
        {burger_name: "John-Mike's Awesome Burger!"},
        {burger_name: "Spoofy Burger"},
        {burger_name: "Now this is a Burger"}
      ])
  },

  down: function (queryInterface, Sequelize) {
    return Burgers.destroy({where: {burger_name: [
        "Whopper",
        "Big Mac",
        "John-Mike's Awesome Burger!",
        "Spoofy Burger",
        "Now this is a Burger"
      ]}})
  }
};
