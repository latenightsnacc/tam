import Users from "../models/UserModel";
import jwt from "jsonwebtoken";

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where: {
                refresh_token: refreshToken
            }
        })
    } catch (error) {

    }
}