import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";
//{}안에 import를 하게되면 임의로 이름을 변경할 수 없다
const globalRouter = express.Router();
const handleHome = (req,res) => res.send("HOME");
const handleJoin = (req,res) => res.send("thins is join page");

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);
export default globalRouter; //globalRouter만 익스포트 하게 설정

