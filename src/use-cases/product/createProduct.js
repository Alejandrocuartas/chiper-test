const { Product } = require("../../entities");

const { uploadImage } = require("../../helpers");

const createProduct = async (
    name,
    price,
    description,
    discount = null,
    path = null
) => {
    try {
        let image = null;
        image = await uploadImage(path);
        const newProduct = new Product({
            name,
            price,
            description,
            discount,
            image,
        });
        await newProduct.save();
        const products = await Product.find();
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = createProduct;
