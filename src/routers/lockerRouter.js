import express from "express";
import {getLock,seeLocker,ReturnorApplicateLocker,seePassword} from "../controllers/lockerController"

const lockerRouter = express.Router();


lockerRouter.route("/").get(getLock);
//getLock는 홈에서 미리보기 시 view template  
lockerRouter.get("/:id([0-9a-f]{24})", seeLocker);
lockerRouter.post("/:id([0-9a-f]{24})", ReturnorApplicateLocker);
lockerRouter.get("/:id([0-9a-f]{24})/password", seePassword);


export default lockerRouter;

