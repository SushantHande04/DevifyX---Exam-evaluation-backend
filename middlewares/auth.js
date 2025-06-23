import jwt from "jsonwebtoken";
import {userModel} from "../models/user.js";

export function isAuthenticated(req, res, next) {
    try{
        const token = req.cookies.authToken;
        if(!token) {
             return res.status(401).json({ status: false, message: "Access denied" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err) {
        return res.status(400).json({ status: false, message: "Invalid token." });
    }
}

export async function isExaminer(req, res, next) {
    try{
        console.log(req.user);
        const examiner = await userModel.findOne({_id: req.user._id});
        
        if(examiner.role != "examiner") {
            return res.json({status: false, message: "Access denied"});
        }

        next();
    }catch(err) {
        next(err);
    }
}

export async function isStudent(req, res, next) {
    try{
        
        const student = await userModel.findOne({_id: req.user._id});
        
        if(student.role != "student") {
            return res.json({status: false, message: "Access denied"});
        }

        next();
    }catch(err) {
        next(err);
    }
}