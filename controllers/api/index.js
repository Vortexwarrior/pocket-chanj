
const router = require('express').Router();
const incomeRoutes = require('./incomeRoutes');
const expensesRoutes = require('./expensesRoutes');
const budgetReportsRoutes = require('./budgetreportRoutes')

router.use('/incomes', incomeRoutes);
router.use('/expenses', expensesRoutes);
router.use('/budgetreports', budgetReportsRoutes);
const apiRoutes = require('./api');
// const userRoutes = require('./api/user-routes'); 

router.use('/api', apiRoutes);
// router.use('/api/users', userRoutes); 



module.exports = router;
