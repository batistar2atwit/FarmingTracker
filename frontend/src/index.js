import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './components/AscGemsTab/ascGemsTable.css';
import './components/BookTab/expBookTable.css';
import "./style/index.scss";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>,
);

