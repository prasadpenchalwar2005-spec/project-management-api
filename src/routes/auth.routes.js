const express = require("express");

const {
  registerUser,
  loginUser,
} = require("../controllers/auth.controller");

const validate = require("../middleware/validation.middleware");
const {
  registerSchema,
  loginSchema,
} = require("../validations/auth.validation");

const router = express.Router();

router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

module.exports = router;
