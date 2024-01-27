import mongoose from "mongoose";
import { DB_NAME } from "../constance.js";
import express from "express";
const app = express();
// this code is only needed for connect the database and node.js
const connectDB = async ()=>{
    try {
        const connectionForDB = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("MongoDB connected !!!");
        app.listen(process.env.PORT,()=>{
            console.log("node server is running...");
        })
    } catch (error) {
        console.log("MongoDB connection ERROR: " , error);
        process.exit(1); // this will be exit the all process.
    }
}

// const connectDB = ()=>{
//     mongoose.connect(`${process.env.MONGODB_URL}`)
//  .then(()=>{
//     console.log("MongoDB connected!!!");
//     app.listen(process.env.PORT,()=>{
//         console.log("node server is running...");
//     })
//   }).catch(e => console.log(e))
// }

export default connectDB;