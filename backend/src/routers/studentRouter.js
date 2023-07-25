 import express from "express";
import { enterstud, faculty,subject,enterdept, facultyData, subjectData,deptData,studentData,updateSubject,updateFaculty,deleteData, updateStudent, fetch,updateExperties,updatefaculties, updatePlacement, enterplace, placeData, entermarks, marksData, updateMarks, fetchs} from "../controller/students.js";
import { verifyToken } from "../middleware/middleware.js";
import multer from "multer";
const projectRouter=express.Router();

 projectRouter.post("/s" ,enterstud);
 projectRouter.post("/f",faculty);
 projectRouter.post("/sb",subject);
 projectRouter.post("/d",enterdept);
 projectRouter.post("/p",enterplace);
 projectRouter.post("/m",entermarks);
 projectRouter.get("/f",facultyData);
 projectRouter.get("/sb",subjectData);
 projectRouter.get("/d",deptData);
 projectRouter.get("/s",studentData);
 projectRouter.get("/p",placeData);
 projectRouter.get("/m",marksData);
 projectRouter.put("/us/:id",updateStudent);
 projectRouter.put("/usb/:id",updateSubject);
 projectRouter.put("/uf/:id",updateFaculty);
 projectRouter.get("/fetch",fetch);
 projectRouter.get("/fetchs",fetchs);
 projectRouter.put("/ue/:id",updateExperties);
 projectRouter.put("/set/:id",updatefaculties)

projectRouter.put("/up/:id",updatePlacement);
projectRouter.put("/um/:id",updateMarks);
const Store= multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, './uploads')
      },
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
})
const upload= multer({
    storage:Store
})

projectRouter.post("/saveStudent",upload.single('image'),enterstud)
 export default projectRouter;



