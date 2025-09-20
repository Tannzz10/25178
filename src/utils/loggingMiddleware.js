
const loggingMiddleware = (store) => (next) => (action) => {
  console.log("Logging Middleware Triggered:", action);

  // You could also save logs in localStorage
  const logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push({ action, time: new Date().toISOString() });
  localStorage.setItem("logs", JSON.stringify(logs));

  return next(action);
};

export default loggingMiddleware;
