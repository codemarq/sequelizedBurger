# Eat the Burger App

Eat the Burger is a full-stack web app. This is a burger eating game using node, express, mysql, handlebars, html and css. User can enter any text to create a new burger.  The burger is stored to a sql database on the backend.  The list of burgers on the right is populated by the sql database, along with a "devour it" button.  Clicking the "devour it" button changes the devoured value of the burger in MySQL to "true", which then moves that burger over to the "devoured" column on the right.  The HTML is generated using the Handlebars templating engine in Node.js.  This is an exercise in persistent data and also an exercise in using O.R.M. and setting up a full-stack project using the MVC method. 

## Screenshot

![ScreenShot](/public/assets/img/screenshot.png)

## Technologies Used
- Node.js
- Express
- Handlebars
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
John-Mike Marquardt &copy; 2016
