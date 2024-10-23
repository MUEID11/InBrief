const express = require("express");
const { getUser, getUserByEmail } = require("../controllers/userControllers/userController");
const createUser = require("../controllers/userControllers/createUserController");
const verifyJwt = require("../controllers/Validation/verifyJwt");
const userValidation = require("../controllers/userControllers/userValidation");
const signInController = require("../controllers/userControllers/signInController");
const updateUser = require("../controllers/userControllers/updateUser");
const socialCreateUser = require("../controllers/userControllers/socialCreateUser");
const userHandlers = express.Router();

userHandlers.get("/:email", getUserByEmail);
userHandlers.get("/", getUser);
userHandlers.post("/createuser", createUser);
userHandlers.post("/socialCreateUser", socialCreateUser);
userHandlers.get("/uservalidation", verifyJwt, userValidation);
userHandlers.post("/signin", signInController);
userHandlers.put("/updateUser", updateUser);

module.exports = userHandlers;
