import express from "express";
import {getEdit,postEdit,remove} from "../controllers/userController";
const userRouter = express.Router();

userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/delete", remove);

export default userRouter;
 
