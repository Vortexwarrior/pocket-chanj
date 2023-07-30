//Here we will be connected to the database, able to perform
//operations without writing new raw SQL
const Sequelize = require('sequelize');
require('dotenv').config();

//Turning sequelize to if else format allows it to go to either heroku or local environments -JR
let sequelize;

if (process.env.JAWSDB_URL) {
  //Use the JAWSDB for the db connect when on Heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql',
  });
} else {
  //Use local db credentials when running locally
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  });
}


//Original code block below if we want to go back - JR
// const sequelize = new Sequelize(
// //Here is where the dotenv is utelized//IF USING React App,
// //it would already include DotEnv, *just a note*
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );

//Here we we export what we have made with sequelize to use 
module.exports = sequelize;