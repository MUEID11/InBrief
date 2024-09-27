const express = require("express");
const { getUser } = require("../controllers/userControllers/userController");
const createUser = require("../controllers/userControllers/createUserController");
const userHandlers = express.Router();

userHandlers.get("/", getUser);
userHandlers.post("/createuser", createUser);

module.exports = userHandlers;
