const { Product } = require("../../entities");

const buyProduct = async (id) => {
    try {
        const product = await Product.findByIdAndUpdate(id, { bought: true });
        return product;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = buyProduct;
