//=====================================================================//
// I only comment out lines 54-57
//DEPENDENCIES//
//Import path to handle and transform file paths
const path = require('path');
const express = require('express');
//Import Express-Session
const session = require('express-session');
//Import handlebars
const exphbs = require('express-handlebars');
//Import required path to routes
const routes = require('./controllers');
//Import sequelize 
// Looking at activity 23 I see it's connection not connection.js
const sequelize = require('./config/connection');
//import connect-session-sequelize package which is used with express-sessions in order to use a
//Sequelize Store object that allows us to create a persistent session storage using MySQL or any other supported
//database backend instead of memory storage by setting it equal to an instance of `SequelizeStore`
const SequelizeStore = require("connect-session-sequelize")(session.Store);
//Initializing express
const app = express();
// You can see this inside the object on line 35...look at like 40

//=====================================================================//
//port available for heroku and local server
const PORT = process.env.PORT || 3001;
//====================================================================//
//Set handlebars as the default template engine.
const hbs = exphbs.create({});
//===================================================================//
//Set up sessions
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));
//=====================================================================//
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//=====================================================================//
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// I commented out app.get code since we no longer use index.html. We can add it back it in.
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   });

//=======================================================================//
  //Starts the server to begin listening
//***SHOULD WE BE USING THIS BELOW ? */
//Since we are using a sequelize object//
//Yes to above. TY Krysta - JR

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening at http://localhost:${PORT}`)
    );
});
