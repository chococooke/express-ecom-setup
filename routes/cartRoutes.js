const router = require('express').Router();
const { getCartForUser, addProductToCart } = require("../controllers/cartControllers.js");

router.get("/:userId", (req, res) => getCartForUser(req, res));
router.post("/:userId", (req, res) => addProductToCart(req, res));

module.exports = router;