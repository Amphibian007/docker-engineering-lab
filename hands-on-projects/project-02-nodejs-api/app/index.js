const express = require("express");
const app = express();

const PORT = 3000;

app.get("/health", (req, res) => {
    console.log("Request received. Processing...");
  res.json({
    status: "working",
    message: "Docker update test"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

