const { Product } = require("../../entities");

const updateProduct = async (id, newInfo) => {
    try {
        await Product.findByIdAndUpdate(id, newInfo);
        const products = await Product.find();
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = updateProduct;
