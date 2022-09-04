const server = require("../../src/server");
const app = new server();
const request = require("supertest");

describe("Given a param id to delete a product", () => {
    test("When it is a MongoDB id, server res with 200", async () => {
        const res = await request(app.app).delete(
            "/api/product/631307224bef61d6b2164887"
        );
        expect(res.status).toBe(200);
    });
    test("When the id is not sent or is not Mongo id, server res with 400", async () => {
        const res = await request(app.app).delete("/api/product/dfbg45");
        expect(res.status).toBe(400);
    });
});
