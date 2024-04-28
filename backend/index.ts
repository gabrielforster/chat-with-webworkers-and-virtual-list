import { randomUUID } from "node:crypto"
import express, { urlencoded } from "express"
import multer from "multer"
import ws from "ws"

const httpServer = express()
httpServer.use(urlencoded({ extended: true }))

const wsServer = new ws.Server({ noServer: true })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "/tmp/uploads")
    },
    filename: (req, file, cb) => {
        const uuid = randomUUID()
        cb(null, uuid)
    },
})

const upload = multer({ storage })

httpServer.get("/", (req, res) => {
    res.send("Hello, World!")
})

httpServer.post("/", auth.Middleware, upload.array("files") , (req, res) => {
})

httpServer.on("upgrade", (req, socket, head) => {
    wsServer.handleUpgrade(req, socket, head, (ws) => {
        wsServer.emit("connection", ws, req)
    })
})

httpServer.listen(3000, () => {
    console.log("Server started on http://localhost:3000")
})
