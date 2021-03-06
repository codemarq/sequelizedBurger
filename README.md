[![NSP Status](https://nodesecurity.io/orgs/codemarq/projects/296975d2-0cad-4c33-a298-9f54496aae5f/badge)](https://nodesecurity.io/orgs/codemarq/projects/296975d2-0cad-4c33-a298-9f54496aae5f)

# Sequelised Eat the Burger App

Eat the Burger is a full-stack web app. This is a burger eating game using node, express, mysql, handlebars, sequelize, html and css. I originally built this app using traditional MySQL schema and seeds.  This version of the app had been rebuilt using the node package "Sequelize" to seed the database, and build models and their associated methods. 

User can enter any text to create a new burger.  The burger is stored to a sql database on the backend.  The list of burgers on the right is populated by the sql database, along with a "devour it" button.  Clicking the "devour it" button changes the devoured value of the burger in MySQL to "true", which then moves that burger over to the "devoured" column on the right.  The HTML is generated using the Handlebars templating engine in Node.js.  This is an exercise in persistent data and also an exercise in using O.R.M. and setting up a full-stack project using the MVC method. 

## View on Heroku
[Sequelized burger app](https://marquardt-sequelizedburger.herokuapp.com/)

## Screenshot

![ScreenShot](/public/assets/img/screenshot.png)

## Technologies Used
- Node.js
- Express
- Handlebars
- Sequelize
- CSS
- MySQL
- Bootstrap


## Dependencies

```
- node.js: visit node.js and download...
- mysqldb: apt-get install mysql
- The following dependencies are installed by running npm i
	- Express
	- body-parser
	- express-handlebars
	- method-override
	- mysql
	- sequelize
```


## Run
```
node server.js
```

then navigate to 
```
localhost:3000 in browser
```

You should be able to click the "Add a Burger" button to add a burger to the MySQL database and the left column.  Clicking the "Devour It" button next to any burger will remove it from the Left column and add it to the "Devoured" column on the right.  This will also change the state of the burger in MySQL to devoured=true.


## Built with
- Sublime


## Author
&copy; 2016 John-Mike Marquardt [Github](https://github.com/codemarq) | [jmmarquardt.com](https://jmmarquardt.com) | [LinkedIn](https://www.linkedin.com/in/jmmarquardt)
