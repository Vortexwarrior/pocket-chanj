const router = require('express').Router();
const { BudgetReport } = require('../../models');

//Route to get all incomes
router.get('/', async (req, res) => {
    try {
        const budgetReportData = await BudgetReport.findAll();
        res.status(200).json(budgetReportData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Route to create new income
router.post('/', async (req, res) => {
    try {
      const budgetReportData = await BudgetReport.create(req.body);
      res.status(200).json(budgetReportData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//update a income
router.put('/:id', (req, res) => {
    BudgetReport.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((BudgetReport) => {
        res.json(BudgetReport)
      })
  })

//delete income
router.delete('/:id', async (req, res) => {
    try {
      const budgetReportData = await BudgetReport.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!budgetReportData) {
        res.status(404).json({ message: 'No Budget Report found with this id!' });
        return;
      }
      res.status(200).json(budgetReportData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;