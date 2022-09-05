require("dotenv").config();
import app from "./server";

const server = new app();

server.listen();
