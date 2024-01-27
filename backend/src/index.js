import dotenv from "dotenv"
import connectDB from './db/db.js';
// (async connectDB)()
dotenv.config()
connectDB()

