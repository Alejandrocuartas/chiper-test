const { Product } = require("../entities");

const socketController = async (socket) => {
    const products = await Product.find();
    socket.emit("get-products", {
        products: products.reverse(),
    });
    socket.on("new-product", async () => {
        const products = await Product.find();
        socket.broadcast.emit("get-products", {
            products: products.reverse(),
        });
        socket.emit("get-products", {
            products: products.reverse(),
        });
    });
};

module.exports = socketController;
