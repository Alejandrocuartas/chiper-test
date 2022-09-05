import { response, request, Response } from "express";

import createProduct from "../use-cases/product/createProduct";
import updateProduct from "../use-cases/product/updateProduct";
import deleteProduct from "../use-cases/product/deleteProduct";
import getProducts from "../use-cases/product/getProducts";
import buyProduct from "../use-cases/product/buyProduct";

const getProductsController = async (
    req = request,
    res = response
): Promise<Response> => {
    try {
        const products = await getProducts();
        return res.status(200).json({
            products: products.reverse(),
        });
    } catch (error: any) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

const createProductController = async (
    req: any,
    res = response
): Promise<Response> => {
    try {
        let imagePath = null;
        if (req.files) {
            const { tempFilePath } = req.files.productImage;
            imagePath = tempFilePath;
        }
        const { description, name, price, discount } = req.body;
        const products = await createProduct(
            name,
            price,
            description,
            discount,
            imagePath
        );
        return res.status(200).json({
            products,
        });
    } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

const deleteProductController = async (
    req = request,
    res = response
): Promise<Response> => {
    try {
        const { id } = req.params;
        const products = await deleteProduct(id);
        return res.status(200).json({
            products,
        });
    } catch (error: any) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

const updateProductController = async (
    req = request,
    res = response
): Promise<Response> => {
    try {
        const { id } = req.params;
        const body = req.body;
        const products = await updateProduct(id, body);
        return res.status(200).json({
            products,
        });
    } catch (error: any) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

const buyProductController = async (
    req = request,
    res = response
): Promise<Response> => {
    try {
        const { id } = req.params;
        const product = await buyProduct(id);
        return res.status(200).json({
            product,
        });
    } catch (error: any) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

export default {
    getProductsController,
    createProductController,
    deleteProductController,
    updateProductController,
    buyProductController,
};
