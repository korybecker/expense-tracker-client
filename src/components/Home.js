import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div>
        <h2>Technologies</h2>
        <ul>
          <li>react, react-router-dom</li>
          <li>axios</li>
          <li>bootstrap</li>
          <li>node, express</li>
          <li>mongodb</li>
        </ul>
        <h2>Endpoints</h2>
        <ul>
          <li>https://expense-tracker-kb.herokuapp.com/api/v1/create</li>
          <li>https://expense-tracker-kb.herokuapp.com/api/v1/expenses</li>
          <li>https://expense-tracker-kb.herokuapp.com/api/v1/expenses/:id</li>
          <li>https://expense-tracker-kb.herokuapp.com/api/v1/update/:id</li>
          <li>https://expense-tracker-kb.herokuapp.com/api/v1/delete/:id</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
