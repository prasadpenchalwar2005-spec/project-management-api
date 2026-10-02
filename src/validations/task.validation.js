const Joi = require("joi");

const createTaskSchema = Joi.object({
  title: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required(),

  description: Joi.string()
    .trim()
    .max(2000)
    .allow("")
    .optional(),

  projectId: Joi.string()
    .hex()
    .length(24)
    .required(),

  assignedUser: Joi.string()
    .hex()
    .length(24)
    .required(),

  priority: Joi.string()
    .valid("LOW", "MEDIUM", "HIGH")
    .optional(),

  status: Joi.string()
    .valid("TODO", "IN_PROGRESS", "COMPLETED")
    .optional(),

  dueDate: Joi.date()
    .optional(),
});

const updateTaskSchema = Joi.object({
  title: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .optional(),

  description: Joi.string()
    .trim()
    .max(2000)
    .allow("")
    .optional(),

  projectId: Joi.string()
    .hex()
    .length(24)
    .optional(),

  assignedUser: Joi.string()
    .hex()
    .length(24)
    .optional(),

  priority: Joi.string()
    .valid("LOW", "MEDIUM", "HIGH")
    .optional(),

  status: Joi.string()
    .valid("TODO", "IN_PROGRESS", "COMPLETED")
    .optional(),

  dueDate: Joi.date()
    .optional(),
}).min(1);

module.exports = {
  createTaskSchema,
  updateTaskSchema,
};
