const getProducts = () => {
    return "Fetching all products"
}

const productById = (id) => {
    return "Fetching product with Id: " + id;
}

const addProduct = () => {
    return "Adding a new product";
}

module.exports = {getProducts, productById, addProduct};