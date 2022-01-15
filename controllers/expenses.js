const res = require('express/lib/response');
const expense = require('../models/expense');
const Expense = require('../models/expense');

const getAllExpenses = async (req, res) => {
    try {
        const tasks = await Expense.find({});
        res.status(200).json({tasks});
    } catch(e) {
        res.status(500).json({ msg: e });
    }
};

// await expense creation (connects to database)
const createExpense = async (req, res) => {
    try {
        const expense = await Expense.create(req.body);
        res.status(201).json({ expense });         // 201 successful post
    } catch (e) {
        res.status(500).json({ msg: e });
    }
};

const getSingleExpense = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) {
            return res.status(404).json({ msg: `No task with id: ${req.params.id}`});
        }
        res.status(200).json({ expense });
    } catch (e) {
        res.status(500).json({ msg: e });
    }
};

const updateExpense = async (req, res) => {
    
};

const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndRemove(req.params.id);
        if (!expense) {
            return res.status(404).json({ msg: `No task with id ${req.params.id}`});
        }
        res.status(200).json({ expense })
    } catch (e) {
        res.status(500).json({ msg: e })
    }
};

// export all controller middlewares (used in routes)
module.exports = {
    getAllExpenses,
    createExpense,
    getSingleExpense,
    updateExpense,
    deleteExpense,
};
