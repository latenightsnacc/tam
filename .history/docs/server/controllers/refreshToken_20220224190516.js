import Users from "../models/UserModel";
import jwt from "jsonwebtoken";

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refresh
    } catch (error) {

    }
}