const getAllProducts = (req, res) => {
    res.send("Fetching all products");
}

const getProductByID = (req, res) => {
    res.send("Fetching product with ID: ", req.params.id);
}

const addNewProduct = (req, res) => {
    res.send("Adding a new product");
}
module.exports = { getAllProducts, getProductByID, addNewProduct }