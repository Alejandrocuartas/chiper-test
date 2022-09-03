require("dotenv").config();
const app = require("./server");

const server = new app();

server.listen();
