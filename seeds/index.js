const seedBudgetReport = require('./budgetreport-seeds.js');
const seedExpenses = require('./expenses-seeds.js');
const seedIncome = require('./income-seeds.js');
const seedUserData = require('./user-data-seeds.js');

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

    await seedUserData();
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);
};

seedAll();

