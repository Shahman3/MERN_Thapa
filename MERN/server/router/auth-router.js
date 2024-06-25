// -----------------------
// Router in express.js = express.Router
// -----------------------
// in Express js , express.Router() is  a mini Express application without all the server configurations
// but with the ability to define routes , and even has its own set of route handlers. It allows you to
// modularize your routes and middleware to keep your code organize and maintainable
// -----------------------

const express = require("express");
const router = express.Router();
const {
  home,
  register,
  login,
  user,
} = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { loginSchema, signupSchema } = require("../validators/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");
router.route("/").get(home);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(validate(loginSchema), login);
router.route("/user").get(authMiddleware, user);
module.exports = router;
