const router = require('express').Router();
const {getAllUsers, addNewUser, getUserById} = require("../controllers/userControllers.js");

router.get("/", (req, res) => getAllUsers(req, res));
router.post("/", (req, res) => addNewUser(req, res));
router.get("/:id", (req, res) => getUserById(req, res))

module.exports = router;