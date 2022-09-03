const { model, Schema } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "The name of the product is required"],
    },
    discount: {
        type: Number,
    },
    price: {
        type: Number,
        required: [true, "The price of the product is required"],
    },
    description: {
        type: String,
        required: [true, "The description of the product is required"],
    },
    bought: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
    },
});

/* eslint-disable func-names */
productSchema.methods.toJSON = function () {
    const { __v, ...rest } = this.toObject();
    return rest;
};

module.exports = model("product", productSchema);
