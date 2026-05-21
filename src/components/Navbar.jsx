import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // ✅ check login status
  const isLoggedIn = localStorage.getItem("token");

  // ✅ logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove auth
    navigate("/login"); // redirect
  };

  return (
<nav>
  <a href="/">Home</a> | 
  <a href="/appointments">Appointments</a> | 
  <a href="/login">Login</a> | 
  <a href="/signup">Sign Up</a>
</nav>
  );
};

export default Navbar;
