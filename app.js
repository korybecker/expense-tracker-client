const express = require("express");
const app = express();
const expenses = require("./routes/expenses");
const connectDB = require("./db/connect");
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/expenses", expenses);

// app.get('/api/v1/expenses');           - get all tasks
// app.post('/api/v1/expenses');          - create new task
// app.get('/api/v1/expenses/:id');       - get single task
// app.patch('/api/v1/expenses/:id');     - update single task
// app.delete('/api/v1/expenses/:id');    - delete single task

// port
const PORT = 5000 || process.env.PORT;

// connect only if connectDB()   (returns promise)
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
  } catch (e) {
    console.error(e);
  }
};

start();
