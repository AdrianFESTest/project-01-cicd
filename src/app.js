const express = require("express");
const { createMessage, getMessage } = require("./utils/message");
const { add } = require("./utils/math");

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/message", (_req, res) => {
  res.json({ message: getMessage() });
});

app.get("/hello/:name", (req, res) => {
  const message = createMessage(req.params.name);

  res.json({ message });
});

app.post("/add", (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({
      error: "Both a and b must be numbers",
    });
  }

  return res.json({
    result: add(a, b),
  });
});

module.exports = app;
