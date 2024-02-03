import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName:{
        type: String,
        required: true,
        trim: true,
        index:true
    },
    avatar:{
        type: String, // cloudnary url
        required: true
    },
    coverImage:{
        type:String, // cloudnary url
    },
    whatchistory:[
        {
            type: Schema.Type.ObjectId,
            ref: "Video"
        }
    ],
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    refreshToken:{
        type: String
    }
}, {timestamps: true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.methodes.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken =  function(){
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.userName,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRE
        }
    )
}
userSchema.methods.generateRefreshToken =  function(){
    jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRE
        }
    )
}

export const User = mongoose.model('User',userSchema)