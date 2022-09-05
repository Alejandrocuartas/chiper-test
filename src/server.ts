import { Application } from "express";

import express from "express";
const fileUpload = require("express-fileupload");
const cors = require("cors");
import path from "path";
const swaggerUI = require("swagger-ui-express");

const swaggerSetup = require("../swagger.json");
import dbConnector from "./data-access";
import productRouter from "./routes/product";

class ServerModel {
    app: Application;
    port: any;
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.dbConnector();

        this.middlewares();

        this.routes();
    }

    async dbConnector() {
        await dbConnector();
    }

    middlewares() {
        this.app.use(express.static("public"));
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(
            fileUpload({
                useTempFiles: true,
                tempFileDir: "/tmp/",
            })
        );
        this.app.use(
            "/api/docs",
            swaggerUI.serve,
            swaggerUI.setup(swaggerSetup)
        );
    }

    routes() {
        this.app.use("/api", productRouter);
        this.app.get("/*", (req, res) => {
            res.sendFile(
                path.join(__dirname, "../public/index.html"),
                (err) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                }
            );
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            /* eslint-disable no-console */
            console.log("Listening at", this.port);
        });
    }
}

export default ServerModel;
