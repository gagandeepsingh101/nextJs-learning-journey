import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
});

let ProductModel;

try {
    // Attempt to retrieve the existing model
    ProductModel = mongoose.model("Product");
} catch (e) {
    // Model does not exist, define it
    ProductModel = mongoose.model("Product", ProductSchema);
}

export { ProductModel };
