const express = require("express");

const protect = require("../middleware/auth.middleware");

const validate = require("../middleware/validation.middleware");

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");

const {
  createProjectSchema,
  updateProjectSchema,
} = require("../validations/project.validation");

const router = express.Router();

router.post(
  "/",
  protect,
  validate(createProjectSchema),
  createProject
);

router.get("/", protect, getProjects);

router.put(
  "/:id",
  protect,
  validate(updateProjectSchema),
  updateProject
);

router.delete("/:id", protect, deleteProject);

module.exports = router;
