require("dotenv").config();
import express from "express";
import http from "http";
import cors from "cors"; 
import { Server, Socket } from "socket.io";
import { router } from "./routes";

const app = express();
const serverHTTP = http.createServer(app);

 
app.use(express.json());
app.use(cors());
app.use(router);

const io = new Server(serverHTTP, {
    cors: {
        origin: "*"
    }
});

io.on("connection", socket =>{
    console.log(`Usuário conectado no socket ${socket.id}`)
});


app.get("/github", (req,res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
});

app.get("/signin/callback", (req,res) => {
    const { code } = req.query;
    return res.json(code);
})


 export { serverHTTP, io};