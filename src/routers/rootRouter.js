import express from "express";
import { login } from "../controllers/userController";
import { home, join, joined } from "../controllers/rootController";
//{}안에 import를 하게되면 임의로 이름을 변경할 수 없다
const rootRouter = express.Router();


rootRouter.route("/").get(home).post(login);
rootRouter.route("/join").get(join).post(joined);
export default rootRouter; //rootRouter만 익스포트 하게 설정

