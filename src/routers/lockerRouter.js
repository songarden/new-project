import express from "express";
import {getLock,loginLock,seeLocker,ReturnorApplicateLocker,seePassword} from "../controllers/lockerController"

const lockerRouter = express.Router();


lockerRouter.route("/").get(getLock).post(loginLock);
lockerRouter.get("/:id(\\d+)", seeLocker);
lockerRouter.post("/:id(\\d+)", ReturnorApplicateLocker);
lockerRouter.get("/:id(\\d+)/password", seePassword);


export default lockerRouter;

