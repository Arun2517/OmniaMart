import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/css/auth.css";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginUser(form);

login(data.token);

const decoded = jwtDecode(data.token);

alert("Login Successful!");

if (decoded.role === "admin") {

  navigate("/admin");

} else {

  navigate("/");

}
    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
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
          <p>Welcome Back</p>
        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <button type="submit">
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

        <div className="auth-footer">
          Don't have an account?

          <Link to="/register">
            Register
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;