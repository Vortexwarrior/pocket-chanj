const { BudgetReport } = require('../models');

const budgetReportData = [
    {
        income_name: 'test income',
        income_amount: '2.00',
        expense_name: 'test expense',
        expense_amount: '2.00',
    },
];

const seedBudgetReport = () => BudgetReport.bulkCreate(budgetReportData);

module.exports = seedBudgetReport;