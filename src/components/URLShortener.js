// src/components/UrlShortener.js
import React, { useState, useEffect } from "react";
import { isLoggedIn, getCurrentUser, logout } from "../utils/auth";

export default function UrlShortener() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    // Middleware check
    if (isLoggedIn()) {
      setLoggedIn(true);
      setUser(getCurrentUser());
    }

    // Redirect if visiting short link
    if (window.location.hash) {
      const code = window.location.hash.substring(1);
      const original = localStorage.getItem(code);
      if (original) {
        window.location.href = original;
      }
    }
  }, []);

  const handleShorten = () => {
    if (!longUrl) {
      alert("Enter a URL!");
      return;
    }
    const shortCode = Math.random().toString(36).substring(2, 7);
    localStorage.setItem(shortCode, longUrl);
    const shortLink = window.location.origin + "/#" + shortCode;
    setShortUrl(shortLink);
  };

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    setUser("");
  };

  if (!loggedIn) {
    return <p style={{ color: "red" }}>⚠ Please login first to access the URL shortener.</p>;
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>URL Shortener</h2>
      <p>✅ Welcome, {user}!</p>

      <input
        type="text"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <br />
      <button onClick={handleShorten}>Shorten</button>

      {shortUrl && (
        <p>
          Short URL:{" "}
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </p>
      )}

      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
