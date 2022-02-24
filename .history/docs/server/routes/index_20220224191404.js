import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/users";
import { verifyToken } from "../middleware/verifyToken";