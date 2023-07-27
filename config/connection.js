//Here we will be connected to the database, able to perform
//operations without writing new raw SQL
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
//Here is where the dotenv is utelized//IF USING React App,
//it would already include DotEnv, *just a note*
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

//Here we we export what we have made with sequelize to use 
module.exports = sequelize;