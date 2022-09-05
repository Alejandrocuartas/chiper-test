import Product from "../../entities/product";

const getProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export default getProducts;
