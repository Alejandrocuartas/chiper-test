import { Router } from "express";
import { body, param } from "express-validator";

import validator from "../middlewares/validator";

import productControllers from "../controllers/product";

const productRouter = Router();

productRouter.get("/product", productControllers.getProductsController);
productRouter.patch(
    "/product/:id",
    [param("id", "The id is required and MongoId").isMongoId(), validator],
    productControllers.updateProductController
);
productRouter.delete(
    "/product/:id",
    [param("id", "The id is required and MongoId").isMongoId(), validator],
    productControllers.deleteProductController
);
productRouter.patch(
    "/product/buy/:id",
    [param("id", "The id is required and MongoId").isMongoId(), validator],
    productControllers.buyProductController
);
productRouter.post(
    "/product",
    [
        body("name", "The name of the product is required").not().isEmpty(),
        body("description", "The description of the product is required")
            .not()
            .isEmpty(),
        body("price", "The price of the product is required").not().isEmpty(),
        validator,
    ],
    productControllers.createProductController
);

export default productRouter;
