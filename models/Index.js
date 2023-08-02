//import models

const BudgetReport = require('./BudgetReport');
const Expenses = require('./Expenses');
const Income = require('./Income');
const User = require('./User');

// Income belongsto BudgetReport
// Expense belongs to budgetreport

Income.belongsTo(BudgetReport,{
    foreignKey: 'budget_id'
});

Expenses.belongsTo(BudgetReport,{
    foreignKey: 'budget_id'
});

module.exports = {
    Income,
    Expenses,
    BudgetReport,
    User,
};