//import models

const BudgetReport = require('./BudgetReport');
const Expenses = require('./Expenses');
const Income = require('./Income');
const User = require('./User');

BudgetReport.belongsTo(User,{
  foreignKey:'user_id',
  });

User.belongsTo(BudgetReport,{
  foreignKey:'budgetreport_id',
})

Expenses.belongsTo(User, {
  foreignKey:'user_id',
});

Income.belongsTo(User, {
  foreignKey:'user_id',
});

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