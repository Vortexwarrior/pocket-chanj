const router = require('express').Router();
const { User } = require('../models');
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
//  if (req.session.logged_in) {
   // res.redirect('/');
 //   return;
  //}

  res.render('login');
});
router.get('/userprofile', (req,res) => {
  res.render('userprofile')
})

module.exports = router;