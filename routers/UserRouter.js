const userController = require("../controllers/userController.js");
//const userController = require("/Users/yjkims-mtn/Desktop/nodejs-Project/expressjs/expressjsSequelize/controllers/userController");
const router = require("express").Router();

router.post("/addUser", userController.addUser);

router.get("/allUsers", userController.getAllUsers);

router.get("/:id", userController.getUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
