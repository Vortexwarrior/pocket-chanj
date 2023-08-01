const router = require('express').Router();
const { Income } = require('../../models');

//Route to get all incomes
router.get('/', async (req, res) => {
    try {
        const incomeData = await Income.findAll();
        res.status(200).json(incomeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Route to create new income
router.post('/', async (req, res) => {
    try {
      const incomeData = await Income.create(req.body);
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//update a income
router.put('/:id', (req, res) => {
    Income.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((income) => {
        res.json(income)
      })
  })

//delete income
router.delete('/:id', async (req, res) => {
    try {
      const incomeData = await Income.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!incomeData) {
        res.status(404).json({ message: 'No Income found with this id!' });
        return;
      }
      res.status(200).json(incomeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;
  