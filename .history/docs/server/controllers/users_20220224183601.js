import Users from "../models/UserModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:
        })
    }
}