import React from "react";
import logo from "../../../assets/logo/logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../Login";
import HomePage from "../HomePage";
import Register from "../Register";
import Cart from "../Cart";
import User from "../User";
import Header from "../../organisme/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header
        title="Gemify Store"
        subtitle="Cepat - Mudah - Terpercaya - Aman"
        textButton="Login"
        textButton2nd="Register"
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
