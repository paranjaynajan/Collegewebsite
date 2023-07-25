import { StatusCodes} from "http-status-codes"
import * as fs from 'fs'

import { deptModel, facultyModel, markModel, placeModel, studentModel, subjModel } from "../models/model.js";

export async function enterstud(req, res) {
    try {
    
        const image = req.file.filename;
        req.body['image']=fs.readFileSync('./uploads/' + req.file.filename);
        const student = new studentModel(req.body);
        await student.save();
        res.status(StatusCodes.CREATED).json({ msg: "Registartion succesful" })
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in creating..." })
    }

}
export async function faculty(req, res) {
    try {
        const faculty = new facultyModel(req.body);
        await faculty.save();
        res.status(StatusCodes.CREATED).json({ msg: "Entery succesful" })
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in creating..." })
    }

}
export async function subject(req, res) {
    try {
        const sub = new subjModel(req.body);
        await sub.save();
        res.status(StatusCodes.CREATED).json({ msg: "Entery succesful" })
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in creating..." })
    }

}
export async function enterdept(req, res) {
    try {
        const dept = new deptModel(req.body);
        await dept.save();
        res.status(StatusCodes.CREATED).json({ msg: "Entery succesful" })
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in creating..." })
    }

}
export async function enterplace(req, res) {
    try {
        const place= new placeModel(req.body);
        await place.save();
        res.status(StatusCodes.CREATED).json({ msg: "Entery succesful" })
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in creating..." })
    }

}
export async function entermarks(req, res) {
    try {
        const mark = new markModel(req.body);
        await mark.save();
        res.status(StatusCodes.CREATED).json({ msg: "Entery succesful" })
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in creating..." })
    }

}
export async function facultyData(req, res) {
    try {
        const faculty = await facultyModel.find();
        res.status(StatusCodes.OK).json(faculty);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function subjectData(req, res) {
    try {
        const subject = await subjModel.find();
        res.status(StatusCodes.OK).json(subject);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function deptData(req, res) {
    try {
        const dept = await deptModel.find();
        res.status(StatusCodes.OK).json(dept);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function studentData(req, res) {
    try {
        const student = await studentModel.find();
        res.status(StatusCodes.OK).json(student);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function placeData(req, res) {
    try {
        const place = await placeModel.find();
        res.status(StatusCodes.OK).json(place);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}

export async function marksData(req, res) {
    try {
        const mark = await markModel.find();
        res.status(StatusCodes.OK).json(mark);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}

export async function fetch(req, res) {
    try {
        const dept = await deptModel.find().populate({path:"studentdetails",populate:{path:"marks"}}).populate('faculties').populate({path:"subjects",populate:{path:"faculty"}}).populate('placement').populate({path:"faculties",populate:{path:"experties"}}); 
        res.status(StatusCodes.OK).json(dept);
        
    }
    catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function fetchs(req, res) {
    try {
        const stud=await studentModel.find().populate('marks');
         res.status(StatusCodes.OK).json(stud);
    }
    catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}

export async function updateStudent(req, res) {
    try {
        const deptid = req.params.id;
        console.log(deptid)
        const stu = await studentModel.findById({ _id: req.body.student })
        console.log(stu);
        const dept = await deptModel.findByIdAndUpdate(deptid, { $push: { studentdetails: stu._id } }, { new: true })
        res.status(StatusCodes.OK).json(dept);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function updateFaculty(req, res) {
    try {
        const deptid = req.params.id;
        console.log(deptid)
        const facul = await facultyModel.findById({ _id: req.body.faculty })
        console.log(facul);
        const dept = await deptModel.findByIdAndUpdate(deptid, { $push: { faculties: facul._id } }, { new: true })
        res.status(StatusCodes.OK).json(dept);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function updateSubject(req, res) {
    try {
        const deptid = req.params.id;
        console.log(deptid)
        const sub = await subjModel.findById({ _id: req.body.subject })
        console.log(sub);
        const dept = await deptModel.findByIdAndUpdate(deptid, { $push: { subjects: sub._id } }, { new: true })
        res.status(StatusCodes.OK).json(dept);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function deleteData(req, res) {
    try {
        const deptid = req.params.id;
        const stu = await studentModel.findById({ _id: req.body.student })
        const dept = await deptModel.findByIdAndUpdate(deptid, { $pop: { studentdetails: stu._id } })
        res.status(StatusCodes.OK).json(dept);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function updateExperties(req, res) {
    try {
        const facul =  req.params.id 
        console.log(facul);
        const sub = await subjModel.findById({ _id: req.body.experties })
        console.log(sub);
        const dept = await 
            facultyModel.findByIdAndUpdate(facul,
                { $push: { experties: sub._id } }, { new: true })
        res.status(StatusCodes.OK).json(dept);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function updatefaculties(req, res) {
    try {
        const subid = req.params.id;
        console.log(subid)
        const facult = await facultyModel.findById({ _id: req.body.faculty })
        console.log(facult);
        const dept = await subjModel.findByIdAndUpdate(subid, { $push: { faculty: facult._id } }, { new: true })
        res.status(StatusCodes.OK).json(dept);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function updatePlacement(req, res) {
    try {
        const deptid=  req.params.id 
        console.log(deptid);
        const place = await placeModel.findById({ _id: req.body.place })
        console.log(place);
       const dept= await deptModel.findByIdAndUpdate(deptid,
                { $push: { placement:place._id } }, { new: true })
        res.status(StatusCodes.OK).json(dept);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
export async function updateMarks(req, res) {
    try {
        const studentid = req.params.id;
        console.log(studentid)
        const mark = await markModel.findById({ _id: req.body.marks })
        console.log(mark);
        const stu = await studentModel.findByIdAndUpdate(studentid, { $push: { marks: mark._id } }, { new: true })
        res.status(StatusCodes.OK).json(stu);
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
    }

}
// export async function set(req, res) {
//     try {
//         const deptid = req.params.id;
//         console.log(deptid)
//         const sub = await subjModel.findById({ _id: req.body.subject })
//         console.log(sub);
//         const dept = await deptModel.findByIdAndUpdate(deptid, { $set: {subjects: sub._id } }, { new: true })
//         res.status(StatusCodes.OK).json(dept);
//     }
//     catch (error) {
//         console.log(error);
//         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in fetching..." })
//     }

// }
