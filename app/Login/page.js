// Login.js
"use client";
import React, { useState } from "react";
import "./style.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Add your login submission logic here
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src="/login.png" alt="Login" className="responsive-image" />
      </div>
      <div className="form-container">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">
              Se connecter
            </button>
          </div>
        </form>
        {/* Signup option */}
        <div className="signup-option">
          <p>
            Vous n'avez pas de compte? <a href="/Signup">Créer un compte</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
