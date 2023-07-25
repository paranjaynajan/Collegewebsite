import  express  from "express";
import cors from "cors";
import { dbconnect } from "./src/dbconfig/dbconnect.js";
import projectRouter from "./src/routers/studentRouter.js";
import adminRouter from "./src/routers/adminrouter.js";
import img from "./src/models/imagemodel.js";


const app=express();
app.use(cors());
app.use(express.json());
app.use(adminRouter)
app.use(projectRouter);
app.use(img)
app.listen(7834,()=>{console.log("server is running.."),dbconnect()})