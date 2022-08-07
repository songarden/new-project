import express from "express";
import { login } from "../controllers/lockerController";
import { join, edit } from "../controllers/userController";
import { home } from "../controllers/globalController";
//{}안에 import를 하게되면 임의로 이름을 변경할 수 없다
const globalRouter = express.Router();


globalRouter.route("/").get(home).post(login);
globalRouter.get("/join", join);
globalRouter.get("/edit", edit);
export default globalRouter; //globalRouter만 익스포트 하게 설정

