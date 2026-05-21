import React, { useState } from "react";

<<<<<<< HEAD
const Sign_Up = () => {
=======
const Signup = () => {
>>>>>>> c583566 (Added register API in Sign_Up)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });
<<<<<<< HEAD

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ API CALL (IMPORTANT)
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
    alert("User registered successfully");
  };
=======
>>>>>>> c583566 (Added register API in Sign_Up)

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

<<<<<<< HEAD
      <input name="name" placeholder="Name" onChange={handleChange} />
      <br />

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br />

      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <br />

      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <br />

      <select name="role" onChange={handleChange}>
=======
      <input placeholder="Name" />
      <br /><br />

      <input placeholder="Email" />
      <br /><br />

      <input placeholder="Phone" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <select>
>>>>>>> c583566 (Added register API in Sign_Up)
        <option>Select Role</option>
        <option>Patient</option>
        <option>Doctor</option>
      </select>

      <br /><br />

      <button type="submit">Register</button>
    </form>
  );
};

<<<<<<< HEAD
export default Sign_Up;
=======
export default Signup;
>>>>>>> c583566 (Added register API in Sign_Up)
