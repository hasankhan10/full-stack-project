import mongoose from "mongoose";
import { DB_NAME } from "../constance.js";
// this code is only needed for connect the database.
const connectDB = async ()=>{
    try {
        const connectionForDB = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("MongoDB connected !!!");
    } catch (error) {
        console.log("MongoDB connection ERROR: " , error);
        process.exit(1); // this will be exit the all process.
    }
}


export default connectDB;