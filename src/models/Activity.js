const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    taskId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },

    action: {
      type: String,
      required: true,
      trim: true,
    },

    oldValue: {
      type: String,
      default: "",
    },

    newValue: {
      type: String,
      default: "",
    },

    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

activitySchema.index({ taskId: 1 });

module.exports = mongoose.model("Activity", activitySchema);
