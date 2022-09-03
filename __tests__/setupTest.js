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
    };
});
