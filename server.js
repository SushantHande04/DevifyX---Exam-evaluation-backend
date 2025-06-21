import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cookieParser from "cookie-parser";
import { connectionToDB } from './config/connectDB.js';
import {router as userRouter} from "./routes/user.js";
import {router as examRouter} from "./routes/exam.js";

const app = express();

connectionToDB();

// parse data from client / frontend 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

// routes 
app.use("/api/users", userRouter);
app.use("/api/exams", examRouter);

app.use("*", (req, res, err) => {
    res.status(404).json({message: "Page not found"});
})

app.listen(process.env.PORT, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("server listening");
})