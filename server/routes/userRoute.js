import express from "express";
const router = express.Router();
 import {getUsers, loginUser,registerUser } from "../controllers/userController.js"

router.route("/login").post(loginUser).get(getUsers);
router.route("/register").post(registerUser).get(getUsers);
 
 

export default router;
