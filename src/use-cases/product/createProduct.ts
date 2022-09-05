import Product from "../../entities/product";

import uploadImage from "../../helpers/uploadImage";

const createProduct = async (
    name: string,
    price: number,
    description: string,
    discount = 0,
    path = ""
) => {
    try {
        let image = null;
        image = await uploadImage(path);
        const newProduct = new Product({
            name,
            price,
            description,
            discount,
            image,
        });
        await newProduct.save();
        const products = await Product.find();
        return products;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export default createProduct;
