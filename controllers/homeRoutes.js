const router = require('express').Router();
const { User, BudgetReport } = require('../models');
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
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclued: ['password'] },
      include: [{model: BudgetReport}],
    });

    const user =userData.get({ plain: true });

    res.render('userprofile', {
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