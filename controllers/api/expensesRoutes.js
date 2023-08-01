const router = require('express').Router();
const { Expenses } = require('../../models');

//Route to get all incomes
router.get('/', async (req, res) => {
    try {
        const expenseData = await Expenses.findAll();
        res.status(200).json(expenseData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Route to create new income
router.post('/', async (req, res) => {
    try {
      const expenseData = await Expenses.create(req.body);
      res.status(200).json(expenseData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//update a income
router.put('/:id', (req, res) => {
    Expenses.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((expenses) => {
        res.json(expenses)
      })
  })

//delete income
router.delete('/:id', async (req, res) => {
    try {
      const expenseData = await Expenses.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!expenseData) {
        res.status(404).json({ message: 'No Expenses found with this id!' });
        return;
      }
      res.status(200).json(expenseData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;