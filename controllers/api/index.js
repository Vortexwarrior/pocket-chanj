const router = require('express').Router();
const incomeRoutes = require('./incomeRoutes');
const expensesRoutes = require('./expensesRoutes');
const budgetReportsRoutes = require('./budgetreportRoutes')

router.use('/incomes', incomeRoutes);
router.use('/expenses', expensesRoutes);
router.use('/budgetreports', budgetReportsRoutes);

module.exports = router;