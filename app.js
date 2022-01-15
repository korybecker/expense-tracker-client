import express from 'express';
const app = express();
const expnses = require('./routes/expenses');


// middleware
app.use(express.json());

//routes
app.use('/api/v1/expenses', expenses);

// port
const PORT = 3000 || process.env.PORT;
app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
