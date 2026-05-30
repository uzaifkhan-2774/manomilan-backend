import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://mano-admin:manomilan123@mano-cluster.abcp22g.mongodb.net/manomilan-data");
        console.log("Db connected successfully...!")
        console.log(mongoose.connection.readyState)
    } catch (error) {
        console.log("Db connection error!", error)
    }
}

export default connectDb;
