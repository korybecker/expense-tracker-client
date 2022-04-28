import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CreateExpense from "./components/CreateExpense";
import Navbar from "./components/Navbar";
import Expenses from "./components/Expenses";
import UpdateExpense from "./components/UpdateExpense";
import About from "./components/About";
import axios from "axios";

function App() {
  // array of expenses state
  const [expenses, setExpenses] = useState();

  // useEffect to connnect to api
  useEffect(() => {
    let mounted = true;
    axios
      .get("https://expense-tracker-kb.herokuapp.com/api/v1/expenses")
      .then((res) => {
        if (mounted) {
          setExpenses(res.data);
        }
      })
      .catch((e) => console.log(e));
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Expenses expenses={expenses} />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateExpense />} />
          <Route
            path="/update/:id"
            element={<UpdateExpense expenses={expenses} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
