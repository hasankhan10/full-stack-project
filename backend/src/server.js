import dotenv from "dotenv"
import connectDB from './db/db.js';
import app from './app.js';
dotenv.config()

connectDB()
.then(()=>{
    
})
.catch((error)=>{
    console.log("MongoDB connection failed !!!", error);
})

