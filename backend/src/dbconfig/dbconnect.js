import mongoose from "mongoose";
export async function dbconnect(){
    await mongoose.connect("mongodb://127.0.0.1:27017/users")
    console.log("db connected..")
}