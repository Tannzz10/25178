
import React, { useState } from "react";

export default function URLShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) return;

    // Simple random short URL generator
    const randomString = Math.random().toString(36).substring(7);
    setShortUrl(`http://localhost:3000/${randomString}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL"
          style={{ padding: "8px", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "8px" }}>
          Shorten
        </button>
      </form>

      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>Original URL: {url}</p>
          <p>
            Short URL:{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
