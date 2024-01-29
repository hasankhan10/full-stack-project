import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser"

const app = express();

 // .use() use for onlly middleware to configure.
app.use(cors({
    origin:process.env.CORS_ORIGIN,  // which origin can be requested for api.
    credentials:true,  // allow to send cookies.
}))
app.use(express.json({limit:"16kb"})) // to get  some data in json format in 16kb.
app.use(express.urlencoded({extended:true,limit:"16kb"})) // get some data in urlencoded.
app.use(express.static("public"))
app.use(cookieParser())

export {app}