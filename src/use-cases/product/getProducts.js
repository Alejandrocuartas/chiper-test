const { Product } = require("../../entities");

const getProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getProducts;
