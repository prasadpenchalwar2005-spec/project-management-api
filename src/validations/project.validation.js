const Joi = require("joi");

const createProjectSchema = Joi.object({
  title: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required(),

  description: Joi.string()
    .trim()
    .max(1000)
    .allow("")
    .optional(),

  members: Joi.array()
    .items(Joi.string().hex().length(24))
    .optional(),

  status: Joi.string()
    .valid("ACTIVE", "COMPLETED", "ARCHIVED")
    .optional(),
});

const updateProjectSchema = Joi.object({
  title: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .optional(),

  description: Joi.string()
    .trim()
    .max(1000)
    .allow("")
    .optional(),

  members: Joi.array()
    .items(Joi.string().hex().length(24))
    .optional(),

  status: Joi.string()
    .valid("ACTIVE", "COMPLETED", "ARCHIVED")
    .optional(),
}).min(1);

module.exports = {
  createProjectSchema,
  updateProjectSchema,
};
