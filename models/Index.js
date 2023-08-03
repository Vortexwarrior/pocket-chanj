//import models

const BudgetReport = require('./BudgetReport');
const Expenses = require('./Expenses');
const Income = require('./Income');
const User = require('./User');

User.hasMany(Expenses, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

User.hasMany(Income, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

module.exports = {
    Income,
    Expenses,
    BudgetReport,
    User,
};