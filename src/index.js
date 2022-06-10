import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Navigation,
  Footer,
  Home,
  About,
  Inventory,
  Vehicles,
  Vehicle,
  Contact,
} from "./components"

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navigation/>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/inventory" element={<Inventory />}>
        <Route path="" element={<Vehicles />} />
        <Route path=":vehicleSlug" element={<Vehicle />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
