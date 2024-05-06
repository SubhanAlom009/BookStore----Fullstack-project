import { getBook } from "../controller/Book.controller.js";
import express, { Router } from "express";

const router = Router()

router.get("/",getBook)

export default router