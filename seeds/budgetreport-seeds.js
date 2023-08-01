const { BudgetReport } = require('../models');

const budgetReportData = [
    {
        total_income: '50000.00',
    },
    {
        total_expense: '5000.00',
    }
];

const seedBudgetReport = () => BudgetReport.bulkCreate(budgetReportData);

module.exports = seedBudgetReport;