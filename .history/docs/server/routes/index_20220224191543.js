import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/users";
import { verifyToken } from "../middleware/verifyToken";
import { refreshToken } from "../controllers/refreshToken";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.post('/token', refreshToken)