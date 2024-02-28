import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

export default function App() {
  return;
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Sign-In" element={<Signin />} />
      <Route path="/Sign-Up" element={<Signup />} />
    </Routes>
  </BrowserRouter>;
}
