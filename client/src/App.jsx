import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "../component/Header";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Footer from "../component/Footer";
import PrivateRoute from "../component/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Sign-In" element={<Signin />} />
        <Route path="/Sign-Up" element={<Signup />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
