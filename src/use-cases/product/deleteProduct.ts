import Product from "../../entities/product";

const deleteProduct = async (id: string) => {
    try {
        await Product.findByIdAndDelete(id);
        const products = await Product.find();
        return products;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export default deleteProduct;
