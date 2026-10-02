const Activity = require("../models/Activity");

const getTaskActivities = async (req, res, next) => {
  try {
    const activities = await Activity.find({
      taskId: req.params.taskId,
    })
      .sort({ createdAt: -1 })
      .populate("performedBy", "name email");

    return res.status(200).json({
      success: true,
      message: "Task activities fetched successfully",
      data: activities,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTaskActivities,
};
