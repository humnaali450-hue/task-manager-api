const express = require("express");
const router = express.Router();

let tasks = [
  { id: 1, title: "Learn Express", completed: false },
  { id: 2, title: "Build Backend API", completed: false },
  { id: 3, title: "Push Project to GitHub", completed: false },
];

router.get("/", (req, res) => {
  res.json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
});

module.exports = router;
