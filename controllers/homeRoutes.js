const router = require('express').Router();
const { User, BudgetReport, Expenses, Income } = require('../models');
const withAuth = require('../utils/auth');

// Homepage route
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/index', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('index', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---- LOGIN ROUTE ----
router.get('/login', (req, res) => {

  res.render('login');
});

router.get('/userprofile', withAuth, async (req, res) => {
  try {
    if (!req.session.logged_in) {
      res.redirect('/');
      return;
    }

    const expensesData = await Expenses.findAll({
      include: [
        {
          model: User,
          attribute: ['id'],
          where: {
            id: req.session.user_id,
          },
        },
      ],
    });

    const incomeData = await Income.findAll({
      include: [
        {
          model: User,
          attributes: ['id'],
          where: {
            id: req.session.user_id,
          },
        },
      ],
    });

    const budgetReportData = await BudgetReport.findAll({
      include: [
        {
          model: User,
          attribute: ['id'],
          where: {
            id: req.session.user_id,
          }
        }
      ]
    })

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { excluded: ['password'] },
      include: [{model: BudgetReport}],
    });

    const expenses = expensesData.map((expense) => expense.get({ plain: true}));

    const incomes = incomeData.map((income) => income.get({ plain: true }));

    const budgetReports = budgetReportData.map((budgetReport) => budgetReport.get({ plain: true }));


    const user =userData.get({ plain: true });

    res.render('userprofile', {
      expenses,
      incomes,
      budgetReports,
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/userprofile', withAuth, (req,res) => {
//   res.render('userprofile', {userName: req.session.username });
// })

module.exports = router;