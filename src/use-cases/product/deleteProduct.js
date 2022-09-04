const { Product } = require("../../entities");

const deleteProduct = async (id) => {
    try {
        await Product.findByIdAndDelete(id);
        const products = await Product.find();
        return products;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = deleteProduct;
