import express from "express";
import {seelocker, edit} from "../controllers/lockerController"

const lockerRouter = express.Router();


lockerRouter.get("/watch", seelocker);
lockerRouter.get("/edit", edit);


export default lockerRouter;

