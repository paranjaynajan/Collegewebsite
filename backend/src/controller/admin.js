import bcrypt from 'bcrypt';
import { StatusCodes } from "http-status-codes"
import { adminmodel } from '../models/adminmodel.js';

export async function adminreg(req,res){
    try{ 
    const epassword = bcrypt.hashSync(req.body.password, 12) 
    req.body['password'] = epassword; 
    const admin = await adminmodel(req.body);
    console.log(epassword);
    admin.save();
    }
    catch(error){
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "error in creating.." })
    }

}
export async function admincheck(req,res){
    try {
        const data = await adminmodel.findOne({ phone: req.body.phone })
        if (data) {
            //this will comapre encrpted password to the given password
            //req.body.password == data.password
            if (bcrypt.compare(req.body.password, data.password)) {
                try {
                    const token = jwt.sign({ adminid: data._id }, "hello123")
                    res.json(token);
                } catch (error) {
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "bad request" })
                }

            } else {
                res.status(StatusCodes.NOT_FOUND).json({ message: "invalid password" })
            }

        } else {
            res.status(StatusCodes.NOT_FOUND).json({ message: "invalid phone number" })
        }
    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "bad request" })
    }
}