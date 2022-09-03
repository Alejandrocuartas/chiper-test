const server = require("../../src/server");
const app = new server();
const request = require("supertest");

describe("Given a product sent to the server", () => {
    test("The server must receive the info of the product", async () => {
        const res = await request(app.app).post("/api/product").send({
            name: "Laptop",
            price: 1000,
            description: "For programming",
            discount: 15,
        });
        console.log(res.body);
        expect(res.status).toBe(200);
    });
});
