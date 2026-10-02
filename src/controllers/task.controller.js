const Task = require("../models/Task");
const Activity = require("../models/Activity");

const createTask = async (req, res, next) => {
  try {
    const {
      title,
      description,
      projectId,
      assignedUser,
      priority,
      status,
      dueDate,
    } = req.body;

    const task = await Task.create({
      title,
      description,
      projectId,
      assignedUser,
      priority,
      status,
      dueDate,
    });

    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

const getTasks = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = "createdAt",
      sortOrder = "desc",
      status,
      priority,
      projectId,
      assignedUser,
    } = req.query;

    const filter = {};

    if (status) {
      filter.status = status;
    }

    if (priority) {
      filter.priority = priority;
    }

    if (projectId) {
      filter.projectId = projectId;
    }

    if (assignedUser) {
      filter.assignedUser = assignedUser;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const sort = {
      [sortBy]: sortOrder === "asc" ? 1 : -1,
    };

    const tasks = await Task.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(Number(limit));

    const totalTasks = await Task.countDocuments(filter);

    return res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      data: tasks,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(totalTasks / Number(limit)),
        totalTasks,
        limit: Number(limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    const oldStatus = task.status;
    const newStatus = req.body.status;

    Object.assign(task, req.body);

    await task.save();

    if (newStatus && oldStatus !== newStatus) {
      await Activity.create({
        taskId: task._id,
        action: "STATUS_CHANGED",
        oldValue: oldStatus,
        newValue: newStatus,
        performedBy: req.user.userId,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
