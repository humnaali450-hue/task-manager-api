const express = require("express");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes"); // ✅ updated name

const app = express();


app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Task Manager API is running 🚀" });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
