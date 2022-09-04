const server = require("../../src/server");
const app = new server();
const request = require("supertest");

describe("Given a product sent to the server", () => {
    test("When all the required data is sent, server res with 200", async () => {
        const res = await request(app.app).post("/api/product").send({
            name: "Laptop",
            price: 1000,
            description: "For programming",
            discount: 15,
        });
        expect(res.status).toBe(200);
    });
    test("When the required data is not sent completely, server res with 400", async () => {
        const res = await request(app.app).post("/api/product").send({
            price: 1000,
            description: "For programming",
            discount: 15,
        });
        expect(res.status).toBe(400);
    });
});
