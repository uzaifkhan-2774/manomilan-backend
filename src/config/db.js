import mongoose from "mongoose";
import dotenv from "dotenv";
import { env } from "process";

dotenv.config()

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.mongoUrl);
        console.log("Db connected successfully...!")
        console.log(mongoose.connection.readyState)
    } catch (error) {
        console.log("Db connection error!", error)
    }
}

export default connectDb;
