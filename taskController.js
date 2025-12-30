const getTasks = (req, res) => {
  const tasks = [
    { id: 1, title: "Learn Express", completed: false },
    { id: 2, title: "Build Backend API", completed: false },
    { id: 3, title: "Push Project to GitHub", completed: false }
  ];

  res.json({
    success: true,
    count: tasks.length,
    data: tasks
  });
};

module.exports = {
  getTasks
};
