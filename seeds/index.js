const seedBudgetReport = require('./budgetreport-seeds');
const seedExpenses = require('./expenses-seeds');
const seedIncome = require('./income-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedBudgetReport();
    console.log('\n-----BUDGET REPORT SEEDED ------\n');

    await seedExpenses();
    console.log('\n----- EXPENSES SEEDED -----\n');
    console.log(typeof seedIncome);
    await seedIncome();
    console.log('n\----- INCOME SEEDED -----\n');

    process.exit(0);
};

seedAll();

