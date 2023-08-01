
const router = require('express').Router();
const incomeRoutes = require('./incomeRoutes');
const expensesRoutes = require('./expensesRoutes');
const budgetReportsRoutes = require('./budgetreportRoutes')

router.use('/incomes', incomeRoutes);
router.use('/expenses', expensesRoutes);
router.use('/budgetreports', budgetReportsRoutes);
// const apiRoutes = require('./apiRoutes');
const userRoutes = require('./user-routes'); 

// router.use('/api', apiRoutes);
router.use('/api/users', userRoutes); 



module.exports = router;
