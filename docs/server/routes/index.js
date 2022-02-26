import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Corpers";
import { verifyToken } from "../middleware/verifyToken";
import { refreshToken } from "../controllers/refreshToken";

const router = express.Router();

router.get('/corpers', verifyToken, getUsers);
router.post('/corpers', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;