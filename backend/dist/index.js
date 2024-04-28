"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = __importDefault(require("ws"));
const httpServer = (0, express_1.default)();
const wsServer = new ws_1.default.Server({ noServer: true });
httpServer.get("/", (req, res) => {
    res.send("Hello, World!");
});
httpServer.on("upgrade", (req, socket, head) => {
    wsServer.handleUpgrade(req, socket, head, (ws) => {
        wsServer.emit("connection", ws, req);
    });
});
httpServer.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
