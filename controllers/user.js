import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {userModel} from "../models/user.js";


export const register = async (req, res) => {
    try{
        const {username, email, password, role} = req.body;
        
        const user = await userModel.findOne({username});
        if(user) {
            return res.json({status: false, message: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(password, salt);

        const newUser = await userModel.create({
            username,
            email,
            password: hasedPassword,
            role
        })
        res.json({status: true, message: "User registered successfully"});
    } catch(err) {
        console.log("user registration error: ",err);
        res.json({status: false, message: "Failed to register user"});
    }
}

export const login = async (req, res) => {
    try{
        const {username, email, password} = req.body;

        const existingUser = await userModel.findOne({username, email});
        console.log(existingUser);
        if(!existingUser) {
            return res.json({status: "false", message: "Server error"});
        }

        const result = await bcrypt.compare(password, existingUser.password);
        if(!result) {
            return res.json({status: "false", message: "Server error"});
        } 

        const token = jwt.sign({username, email}, process.env.JWT_SECRET, {expiresIn: "24h"});
        res.cookie("authToken", token, {httpOnly: true, secure: false, sameSite: "Lax"});
        res.json({status: true, message: "User logged in successfully"});
    } catch(err) {
        console.log(err);
        res.json({status: false, message: "Server error"});
    }
}

export const getProfile = async (req, res) => {
    try{
        const {username} = req.user;
        const user = await userModel.findOne({username});

        if(!user) {
            return res.status(400).json({ status: false, message: "Invalid token." });
        }

        res.json({status: true, user});
    }catch(err) {
        res.json({status: false, message: "Server error"});
    }
}

export const logout = (req, res) => {
    res.clearCookie("authToken");
    res.json({status: true, message: "User logged out successfully"});
}