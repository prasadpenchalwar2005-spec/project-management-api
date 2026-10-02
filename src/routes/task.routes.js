const express = require("express");

const protect = require("../middleware/auth.middleware");
const validate = require("../middleware/validation.middleware");

const {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} = require("../controllers/task.controller");

const {
    getTaskActivities,
} = require("../controllers/activity.controller");

const {
    createTaskSchema,
    updateTaskSchema,
} = require("../validations/task.validation");

const router = express.Router();

router.post(
    "/",
    protect,
    validate(createTaskSchema),
    createTask
);

router.get("/", protect, getTasks);

router.get(
    "/:taskId/activities",
    protect,
    getTaskActivities
);

router.put("/:id", protect,
    validate(updateTaskSchema),
    updateTask
);

router.delete("/:id", protect, deleteTask);

module.exports = router;
