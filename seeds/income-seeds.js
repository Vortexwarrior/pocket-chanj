// const seedCategories = require('../../ormecommerce/Develop/seeds/category-seeds');
const { Income } = require('../models');

const incomeData = [
    {
        source_name:'Full time job',
        amount: 50000.00
    },
    {
        source_name:'part-time job',
        amount: 15000.00
    }
];

const seedIncome = () => Income.bulkCreate(incomeData);
console.log('statusof seedIncome');
console.log(typeof seedIncome);

module.exports = seedIncome;