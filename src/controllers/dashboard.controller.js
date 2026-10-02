const Project = require("../models/Project");
const Task = require("../models/Task");

const getDashboard = async (req, res, next) => {
  try {
    const [
      totalProjects,
      totalTasks,
      todoTasks,
      inProgressTasks,
      completedTasks,
      highPriorityTasks,
    ] = await Promise.all([
      Project.countDocuments(),
      Task.countDocuments(),
      Task.countDocuments({ status: "TODO" }),
      Task.countDocuments({ status: "IN_PROGRESS" }),
      Task.countDocuments({ status: "COMPLETED" }),
      Task.countDocuments({ priority: "HIGH" }),
    ]);

    return res.status(200).json({
      success: true,
      message: "Dashboard statistics fetched successfully",
      data: {
        projects: {
          total: totalProjects,
        },
        tasks: {
          total: totalTasks,
          todo: todoTasks,
          inProgress: inProgressTasks,
          completed: completedTasks,
          highPriority: highPriorityTasks,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboard,
};
