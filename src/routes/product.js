const { Router } = require("express");
const { body, param } = require("express-validator");

const { validator } = require("../middlewares");

const {
    getProductsController,
    updateProductController,
    buyProductController,
    deleteProductController,
    createProductController,
} = require("../controllers");

const productRouter = Router();

productRouter.get("/product", getProductsController);
productRouter.patch(
    "/product/:id",
    [param("id", "The id is required and MongoId").isMongoId(), validator],
    updateProductController
);
productRouter.delete(
    "/product/:id",
    [param("id", "The id is required and MongoId").isMongoId(), validator],
    deleteProductController
);
productRouter.patch(
    "/product/buy/:id",
    [param("id", "The id is required and MongoId").isMongoId(), validator],
    buyProductController
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
    createProductController
);

module.exports = productRouter;
