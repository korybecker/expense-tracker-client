const express = require('express');
const app = express();
const expenses = require('./routes/expenses');



// middleware
app.use(express.json());

// routes
app.use('/api/v1/expenses', expenses);

// app.get('/api/v1/expenses');           - get all tasks
// app.post('/api/v1/expenses');          - create new task
// app.get('/api/v1/expenses/:id');       - get single task
// app.patch('/api/v1/expenses/:id');     - update single task
// app.delete('/api/v1/expenses/:id');    - delete single task


// port
const PORT = 3000 || process.env.PORT;
app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
