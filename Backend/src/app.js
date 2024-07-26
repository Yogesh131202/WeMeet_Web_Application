import express from "express";
import {createServer} from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import {connectToSocket}  from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/usersRoute.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 3000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb", extended:true}));

app.use("/api/v1/users", userRoutes);

const start = async()=>{
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://bhagatyogesh7554:6tmdSQnNImc0lvwA@cluster0.kh36jtg.mongodb.net/");
    console.log(`MONGO Connected DB Host ${connectionDb.connection.host}`);

    server.listen(app.get("port"), ()=>{
        console.log("listning on port 3000");
    });
};
start();