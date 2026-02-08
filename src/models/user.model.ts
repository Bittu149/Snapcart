import mongoose from "mongoose";

interface IUser{
    _id:mongoose.Types.ObjectId
    name:string
    email:string
    password:string
    mobile:string
    role:"user" | "deliveryBoy" | "admin" 
}

const userSchema = new mongoose.Schema<IUser>({

},{timestamps:true})