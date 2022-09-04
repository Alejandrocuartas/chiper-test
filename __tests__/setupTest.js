jest.mock("mongoose", () => {
    return {
        connect: (uri) => jest.fn(),
        Schema: class {
            constructor() {
                this.methods = {};
            }
        },
        model: jest.fn(),
    };
});

jest.mock("../src/use-cases", () => {
    return {
        createProduct: jest.fn(),
        deleteProduct: jest.fn((id) => {
            if (!id) throw new Error("The id is required.");
            const products = [
                {
                    name: "laptop",
                    description: "For programming",
                },
            ];
            return products;
        }),
    };
});
