import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Membership from "./pages/Membership";
import Login from "./pages/Login";

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/register" element={<Membership />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
);

export default App;
