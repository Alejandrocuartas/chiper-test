const { deleteProduct } = require("../../src/use-cases");

describe("Given an id of a product, the function deletes it", () => {
    test("When the id is given, it returns all the products", async () => {
        const products = await deleteProduct("631307224bef61d6b2164887");
        const isProductDocument = "name" && "description" in products[0];
        expect(isProductDocument).toBe(true);
    });
    test("When there is no id, it throws an error", async () => {
        const execFunction = async () => {
            await deleteProduct();
        };
        await expect(execFunction).rejects.toThrow();
    });
});
