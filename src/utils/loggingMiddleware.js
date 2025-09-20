// src/utils/auth.js

// Hardcoded credentials (can be expanded later)
const validUser = {
  username: "admin",
  password: "1234",
};

// ✅ Middleware-like login check
export function login(username, password) {
  if (username === validUser.username && password === validUser.password) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
}

export function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}

export function getCurrentUser() {
  return localStorage.getItem("username") || "";
}
