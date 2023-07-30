const { BudgetReport } = require('../models');

const budgetReportData = [
    {
        total_income: '',
    },
    {
        total_expense: '',
    }
];

const seedBudgetReport = () => BudgetReport.bulkCreate(budgetReportData);

module.exports = seedBudgetReport;