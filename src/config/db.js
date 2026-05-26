import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://10.0.0.186:27017/manomilanmaindata");
        console.log("Db connected successfully...!")
        console.log(mongoose.connection.readyState)
    } catch (error) {
        console.log("Db connection error!", error)
    }
}

export default connectDb;
