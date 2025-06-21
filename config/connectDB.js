import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectionToDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
    }catch(err) {
        console.log("mongoDB connection error : ", err);
    }
}

export {connectionToDB};