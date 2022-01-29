const express = require('express');
const router = express.Router();

// importing controllers
const { getAllExpenses, 
        createExpense, 
        getSingleExpense, 
        updateExpense, 
        deleteExpense } = require('../controllers/expenses');

// router.route() allows for chaining methods
// simplifies router.get('/', mw) ... router.post('/', mw) ...
// into       router.route('/').get(mw).post(mw)
router.route('/').get(getAllExpenses).post(createExpense);

router.route('/:id').get(getSingleExpense)
                    .patch(updateExpense)
                    .delete(deleteExpense);

module.exports = router;
