import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cookieParser from "cookie-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";
import { connectionToDB } from './config/connectDB.js';
import {router as userRouter} from "./routes/user.js";
import {router as examRouter} from "./routes/exam.js";
import {router as questionRouter} from "./routes/question.js";
import {router as answerRouter} from "./routes/answer.js";
import {router as resultRouter} from "./routes/result.js";

const app = express();

connectionToDB();

// parse data from client / frontend 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

// routes 
app.use("/api/users", userRouter);
app.use("/api/exams", examRouter);
app.use("/api/questions", questionRouter);
app.use("/api/answers", answerRouter);
app.use("/api/results", resultRouter);


// Swagger integration for API documentation 
const docOptions = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Exam Evaluation Backend",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
    },
    apis: ["./routes/*.js"], 
};
const specs = swaggerJSDoc(docOptions);
app.use(
    "/api-docs", 
    swaggerui.serve,
    swaggerui.setup(specs)
)

app.use((req, res) => {
    res.status(404).json({message: "Page not found"});
})

app.listen(process.env.PORT, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("server listening");
})