
const router = require('express').Router();
const incomeRoutes = require('./incomeRoutes');
const expensesRoutes = require('./expensesRoutes');
const budgetReportsRoutes = require('./budgetreportRoutes')
const userRoutes = require('./user-routes'); 

router.use('/incomes', incomeRoutes);
router.use('/expenses', expensesRoutes);
router.use('/budgetreports', budgetReportsRoutes);
router.use('/users', userRoutes);



module.exports = router;
