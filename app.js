require("dotenv").config();

const express = require("express");

const githubRoutes =
  require("./routes/githubRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("GitHub Analyzer API Running");
});

app.use(
  "/api/github",
  githubRoutes
);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});