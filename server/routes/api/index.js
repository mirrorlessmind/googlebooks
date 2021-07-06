const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./books");
const express = require("express");
const app = express();

router.use("/api", apiRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });

module.exports = router;