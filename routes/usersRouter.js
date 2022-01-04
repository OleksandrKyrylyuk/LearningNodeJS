const express = require("express");
const router = express.Router();

// Import user controller
const { getUsers, createUser, getUserById, deleteUserById, updateUser, updatePassword } = require("../controllers/UsersController");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.delete("/delete/:id", deleteUserById);
router.post("/", createUser);
router.put("/edit", updateUser);
router.put("/updatePassword", updatePassword)

module.exports = router;
