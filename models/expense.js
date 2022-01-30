const mongoose = require('mongoose');

// schemas define structure for documents (instances of models)
const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title must be provided'],
        trim: true,
        maxLength: [30, 'title cannot be more than 30 characters']
    },
    amount: {
        type: Number,
        required: [true, 'amount must be provided'],
        trim: true,
        maxLength: [10, 'amount cannot be more than 10 digits']
    },
    recurring: {
        type: Boolean,
        default: false
    }
});

// export mongoose model (Expense model)
module.exports = mongoose.model('Expense', expenseSchema);