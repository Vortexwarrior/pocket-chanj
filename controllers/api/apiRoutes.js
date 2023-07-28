const router = require('express').Router();

// Import the necessary models
const { Income, Expense, BudgetReport } = require ('../../models');

// Route to get all incomes
router.get('/incomes', async (req, res) => {
    try {
        const incomes = await Income.findAll();
        res.status(200).json(incomes);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Route to get all spending categories
router.get('/expenses', async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json(spendingCategories);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Route to create a new income
router.post('/incomes', async (req, res) => {
    try {
        const newIncome = await Income.create(req.body);
        res.status(201).json(newSpendingCategory)
    } catch (err) {
        res.status(500).json(err);
    }
});