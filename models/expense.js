const mongoose = require('mongoose');

// schemas define structure for documents (instances of models)
const expenseSchema = new mongoose.Schema({
    title: String,
    recurring: Boolean
});

module.exports = mongoose.model('Expense', expenseSchema);