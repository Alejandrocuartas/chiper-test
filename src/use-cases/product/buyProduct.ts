import Product from "../../entities/product";

const buyProduct = async (id: string) => {
    try {
        const product = await Product.findByIdAndUpdate(id, {
            bought: true,
        });
        return product;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export default buyProduct;
