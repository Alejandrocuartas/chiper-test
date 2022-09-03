const { response, request } = require("express");

const {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducts,
    buyProduct,
} = require("../use-cases");

const getProductsController = async (req = request, res = response) => {
    try {
        const products = await getProducts();
        return res.status(200).json({
            products,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

const createProductController = async (req = request, res = response) => {
    try {
        let imagePath = null;
        if (req.files) {
            const { tempFilePath } = req.files.productImage;
            imagePath = tempFilePath;
        }
        const { description, name, price, discount } = req.body;
        const product = await createProduct(
            name,
            price,
            description,
            discount,
            imagePath
        );
        return res.status(200).json({
            product,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

const deleteProductController = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const product = await deleteProduct(id);
        return res.status(200).json({
            product,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

const updateProductController = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await updateProduct(id, body);
        return res.status(200).json({
            product,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

const buyProductController = async (req = request, res = response) => {
    try {
        const { id } = req.body;
        const product = await buyProduct(id);
        return res.status(200).json({
            product,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

module.exports = {
    getProductsController,
    createProductController,
    deleteProductController,
    updateProductController,
    buyProductController,
};
