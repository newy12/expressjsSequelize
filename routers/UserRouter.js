var path = process.cwd();
const userController = require(path + "/controllers/userController.js");
const router = require("express").Router();


router.post("/addUser", userController.addUser);

router.get("/allUsers", userController.getAllUsers);

router.get("/:id", userController.getUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
