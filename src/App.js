// src/App.js
import React, { useState } from "react";
import { login, isLoggedIn } from "./utils/auth";
import UrlShortener from "./components/URLShortener";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  const handleLogin = () => {
    if (login(username, password)) {
      setLoggedIn(true);
      alert("✅ Login successful!");
    } else {
      alert("❌ Invalid credentials!");
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      {!loggedIn ? (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <UrlShortener />
      )}
    </div>
  );
}
