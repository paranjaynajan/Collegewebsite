import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

export async function verifyToken(req, res, next) {
    try{
    const auth = await req.get('Authorization'); //this will get the token from header in authoriztion key but this will have token with the word bearer and a space
    if (auth) {
        const token = auth.split('')[1]; //this will remove the word bearer and space
        jwt.verify(token, "hello123", (error, payload) => {
            if (error) {
                res.status(StatusCodes.UNAUTHORIZED).json({ "msg": "user not found" })
            } else {
                next(); //this will call the function netx to verifyToken()given in router
            }
        })
    }}catch(error){
        console.log(error);
        res.json({msg:"token not verfied"})
    }
}