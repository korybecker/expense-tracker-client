import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "./axios";
import CreateExpense from "./components/CreateExpense";
import Navbar from "./components/Navbar";
import Expenses from "./components/Expenses";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/create" element={<CreateExpense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
