import express from "express";
import { admincheck, adminreg } from "../controller/admin.js";

const adminRouter=express.Router();

adminRouter.post("/",adminreg);
adminRouter.post("/admin",admincheck);

export default adminRouter;