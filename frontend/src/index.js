import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './style/ascGemsTable.css';
import "./style/index.scss";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>,
);

