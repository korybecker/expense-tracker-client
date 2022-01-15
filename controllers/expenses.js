const Expense = require('../models/expense');

const getAllExpenses = (req, res) => {
    res.send('get all expenses');
};

const createExpense = async (req, res) => {
    const expense = await Expense.create(req.body)
    res.status(201).json({expense});
};

const getSingleExpense = (req, res) => {
    res.json({id:req.params.id});
};

const updateExpense = (req, res) => {
    res.send('update expense');
};

const deleteExpense = (req, res) => {
    res.send('delete expense');
};

module.exports = {
    getAllExpenses,
    createExpense,
    getSingleExpense,
    updateExpense,
    deleteExpense,
};
