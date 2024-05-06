import { register,login } from "../controller/User.controller.js";
import express, { Router } from "express";

const router = Router()

router.post("/register",register)
router.post("/login",login)

export default router