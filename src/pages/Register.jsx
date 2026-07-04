import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/css/auth.css";

import { registerUser } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      setLoading(true);

      await registerUser(form);

      alert("Registration Successful!");

      navigate("/login");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  }

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }

  return (

    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">

          <img
            src={logo}
            alt="Omnia Mart"
            className="auth-logo"
          />

          <h1>Omnia Mart</h1>

          <p>Create your account</p>

        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <label>Full Name</label>

          <input
            type="text"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Phone Number</label>

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
          />

          <button type="submit">

            {loading
              ? "Creating Account..."
              : "Create Account"}

          </button>

        </form>

        <div className="auth-footer">

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </div>

      </div>

    </div>

  );

}

export default Register;