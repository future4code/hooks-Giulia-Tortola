import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/signup", userController.signUp)

userRouter.get("/login", userController.login)

userRouter.get("/profile", userController.getUserLogged)