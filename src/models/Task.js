const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    assignedUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "MEDIUM",
    },

    status: {
      type: String,
      enum: ["TODO", "IN_PROGRESS", "COMPLETED"],
      default: "TODO",
    },

    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.index({ projectId: 1 });
taskSchema.index({ assignedUser: 1 });

module.exports = mongoose.model("Task", taskSchema);
