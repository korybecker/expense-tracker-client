const getAllExpenses = (req, res) => {
    res.send('get all expenses');
};

const createExpense = (req, res) => {
    res.send('create expense');
};

const getSingleExpense = (req, res) => {
    res.send('get single expense');
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
