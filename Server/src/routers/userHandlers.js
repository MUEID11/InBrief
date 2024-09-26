const express = require("express");
const { getUser } = require("../controllers/userControllers/userController");
const userHandlers = express.Router();

userHandlers.get("/", getUser);
userHandlers.post("/createuser", );

module.exports = userHandlers;
