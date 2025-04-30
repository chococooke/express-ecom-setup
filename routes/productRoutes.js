const router = require('express').Router();
const  { getAllProducts, getProductByID, addNewProduct } = require("../controllers/productsControllers.js")

router.get("/", (req, res) => getAllProducts(req, res));
router.get("/:id", (req, res) => getProductByID(req, res));
router.post("/", (req, res) => addNewProduct(req, res));

module.exports = router;