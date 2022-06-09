import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import HomePage from "../HomePage";
import Register from "../Register";
import Cart from "../Cart";
import User from "../User";
import Header from "../../organisme/Header";
import Menu from "../../organisme/Menu";

const App = () => {
  return (
    <div className="container mx-auto max-w-xl">
      <Header
        linkLogin="/login"
        linkRegister="/register"
        title="Gemify Store"
        subtitle="Website topup Game, tercepat dan terpercaya."
        textLogin="Login"
        textRegister="Register"
      />
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
