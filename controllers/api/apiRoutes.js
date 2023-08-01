// const router = require('express').Router();
// const { BudgetReport, Expenses, Income } = require ('../../models');


// Import the necessary models. Once Income.js is written and Expense.js is written we need to import those as well. 
//I removed Income and Expense to debug Heroku -JR




//Route to get all spending categories
// router.get('/expenses', async (req, res) => {
//     try {
//         const expenses = await Expense.findAll();
//         res.status(200).json(spendingCategories);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//Route to create a new income
// router.post('/incomes', async (req, res) => {
//     try {
//         const newIncome = await Income.create(req.body);
//         res.status(201).json(newSpendingCategory)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/budgetreports', async (req, res) => {
//     try {
//         const budgetReports = await BudgetReport.findAll();
//         res.status(200).json(budgetReports);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;