import express from "express";
import {getEdit,postEdit,remove,comment,logout} from "../controllers/userController";
const userRouter = express.Router();

userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/delete", remove);
userRouter.get("/comment", comment);
//userRouter.post("/logout",logout);

export default userRouter;
 
