import Product from "../../entities/product";

const updateProduct = async (id: string, newInfo: object) => {
    try {
        await Product.findByIdAndUpdate(id, newInfo);
        const products = await Product.find();
        return products;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export default updateProduct;
