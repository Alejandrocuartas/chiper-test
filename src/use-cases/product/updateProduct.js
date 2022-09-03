const { Product } = require("../../entities");

const updateProduct = async (id, newInfo) => {
    try {
        const product = await Product.findByIdAndUpdate(id, newInfo);
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = updateProduct;
