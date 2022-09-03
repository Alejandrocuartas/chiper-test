const { Product } = require("../../entities");

const deleteProduct = async (id) => {
    try {
        const product = await Product.findByIdAndDelete(id);
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = deleteProduct;
