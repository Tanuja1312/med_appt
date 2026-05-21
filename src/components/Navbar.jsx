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
      <Link to="/">Home</Link>
      <Link to="/appointments">Appointments</Link>

      {/* ✅ conditional rendering */}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
