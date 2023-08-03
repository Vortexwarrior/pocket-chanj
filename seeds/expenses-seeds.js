const {Expenses} = require('../models');

const expensesData = [
    {
        source_name:'groceries',
        amount_due:'425.00'
    },
    {
        source_name: 'transportation',
        amount_due: '25.75',
    },
    {
        source_name: 'phone bill',
        amount_due: '139.86',
        due_date: '2023-08-15'
    },
];

const seedExpenses = () => Expenses.bulkCreate(expensesData);

module.exports = seedExpenses;