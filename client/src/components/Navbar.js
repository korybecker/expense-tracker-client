import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-light container">
      <h4>
        <Link className="link" to="/">
          Home
        </Link>
      </h4>
      <h4>
        <Link className="link" to="/expenses">
          My Expenses
        </Link>
      </h4>
      <h4>
        <Link className="link" to="/create">
          Create New Expense
        </Link>
      </h4>
    </nav>
  );
};

export default Navbar;
