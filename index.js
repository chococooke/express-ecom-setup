const express = require("express");
const userRoutes = require("./routes/userRoutes.js")
const productRoutes= require("./routes/productRoutes.js")
const cartRoutes = require("./routes/cartRoutes.js")

const app = express();

app.use(express.json())
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/users", userRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})