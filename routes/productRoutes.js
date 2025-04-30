const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Fetching all products");
});

router.post("/", (req, res) => {
    res.send("Adding a new product");
});

router.get("/:id", (req, res) => {
    res.send("Fething product with ID: " + req.params.id);
})

module.exports = router;