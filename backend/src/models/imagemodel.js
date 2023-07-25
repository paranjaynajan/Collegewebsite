import mongoose from "mongoose";
import multer from "multer";
import express from "express";
import { StatusCodes } from "http-status-codes"
 const imgsch=mongoose.Schema({
    name:{type:String,required:true},
    img:{data:Buffer,ContentType:String}
 })

 export const Imgmodel=mongoose.model('img',imgsch)

 const Store= multer.diskStorage({
   destination: (req, file, cb)=> {
       cb(null, './uploads2')
     },
   filename: (req,file,cb)=>{
       cb(null,file.originalname);
   }
})
const upload= multer({
   storage:Store
})
const img=express.Router();
img.post("/save",upload.single('img'),(req,res)=>{
   try {
         const newImg= new Imgmodel({name:req.body.name,image:{
            data:req.file.filename,ContentType:"image/png"
         }})
         newImg.save();
      
      res.status(StatusCodes.CREATED).json({ msg: "Registartion succesful" })
  }
  catch (error) {
      console.log(error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in creating..." })
  }
})


img.get('/get',async (req, res) =>{
   try {
       const student = await Imgmodel.find();
       res.status(StatusCodes.OK).json(student);
   }
   catch (error) {
       console.log(error);
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
   }

})
export default img;