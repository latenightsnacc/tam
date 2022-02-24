import Users from "../models/UserModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name','email','role']
        });
        res.json(users);
    }catch(error){
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { name, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"})
}