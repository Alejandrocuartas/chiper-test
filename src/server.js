const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const { Server } = require("socket.io");
const { createServer } = require("http");

const swaggerSetup = require("../swagger.json");
const { dbConnector } = require("./data-access");
const { productRouter } = require("./routes");
const socketController = require("./sockets/socketController");

class ServerModel {
    constructor() {
        this.origin = [
            "http://localhost:8080",
            "https://chiper-test.herokuapp.com",
        ];
        this.app = express();
        this.port = process.env.PORT;
        this.server = createServer(this.app);
        this.io = new Server(this.server, {
            origin: this.origin,
        });

        this.dbConnector();

        this.middlewares();

        this.routes();

        this.sockets();
    }

    async dbConnector() {
        await dbConnector();
    }

    middlewares() {
        this.app.use(express.static("public"));
        this.app.use(express.json());
        this.app.use(
            cors({
                origin: this.origin,
            })
        );
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

    sockets() {
        this.io.on("connection", socketController);
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
        this.server.listen(this.port, () => {
            /* eslint-disable no-console */
            console.log("Listening at", this.port);
        });
    }
}

module.exports = ServerModel;
