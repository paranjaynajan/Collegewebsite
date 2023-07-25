import mongoose, { Schema } from "mongoose";

const studentSch = new mongoose.Schema({
    fathername: { type: String,  required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    semester: { type: Number, required: true },
    gender: { type: String, required: true },
    Rollnumber: { type: String,  required: true },
    session: { type: String,  required: true },
    bloodgroup: { type: String,  required: true },
    contactnumber: { type: String, required: true},
    address: { type: String,  required: true},
    feespaid: { type: Boolean, default: true },
    image: { type: Buffer, contentType: String },
    code: { type: Number,  required: true },
    pass: { type: String,  required: true},
   marks: [{ type: mongoose.Schema.Types.ObjectId, ref: "mark" }],
})

const deptSch = new mongoose.Schema({
    deptname: { type: String, required: true },
    hodname: { type: String, required: true },
    deptphone: { type: Number, required: true },
    deptmission: { type: String, required: true },
    deptvision: { type: String, required: true },
    hodmsg: { type: String, required: true },
    hodimage: { type: Buffer, contentType: String },
    noofstudents: { type: Number, required: true },
    placement: [{ type: mongoose.Schema.Types.ObjectId, ref: "place" }],
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "subject" }],
    faculties: [{ type: mongoose.Schema.Types.ObjectId, ref: "faculty" }],
    studentdetails: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],//many to one
})

const facultySch = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    gender: { type: String, required: true },
    experience: { type: String, required: true },
    qualification: { type: String, required: true },
    designation: { type: String, required: true },
    experties: [{ type: mongoose.Schema.Types.ObjectId, ref: "subject" }],//many to many
})
const placementSch = new mongoose.Schema({
    company: { type: String, required: true },
    students: { type: Number, required: true },
    year: { type: String, required: true },
    studentadmitted: { type: Number, required: true },
    studentplaced: { type: Number, required: true },
})
const subjectSch = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    year: { type: Number, required: true },
    sem: { type: Number, required: true },
    cred: { type: String, required: true },
    lab: { type: Boolean, required: true ,default:true},

    faculty: [{ type: mongoose.Schema.Types.ObjectId, ref: "faculty" }],//many to many
})
const markSch = new mongoose.Schema({
    mark: { type: Number, required: true },
   
   
})

export const deptModel = mongoose.model('department', deptSch);
export const subjModel = mongoose.model('subject', subjectSch);
export const facultyModel = mongoose.model('faculty', facultySch);
export const studentModel = mongoose.model('user', studentSch);
export const placeModel = mongoose.model('place', placementSch);
export const markModel = mongoose.model('mark', markSch);

//f
//63e20af3a186fb1cad31ed4c,63e20b20a186fb1cad31ed4e
//sb
//63e20ba3a186fb1cad31ed51,63e20bb1a186fb1cad31ed53
//d
//63e1dfa45dec6e2cc906497b
//p
//63feeae9bac4a40710e45bbf,63feeed3be47c23f6ac980d9
//m
//64096bd2bfa4ce014f0ccf3e,6409734a5697e8b94afd58f7
//s
//640705b2b5c2ff7a562d6ef1,