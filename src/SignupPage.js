// src/SignupPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password || !confirm) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const alreadyExists = existingUsers.some((user) => user.email === email);

    if (alreadyExists) {
      setError("Email already registered");
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    setError("");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        autoComplete="off"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        autoComplete="off"
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      {error && <p className="error">{error}</p>}
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default SignupPage;
