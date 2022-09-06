import Locker from "../models/Locker";
import User from "../models/User";
import { home } from "./rootcontroller";
import bcrypt from "bcrypt";



export const getLock = (req, res) => {
    
    return res.render("locker", {pagetitle : "Lockers", lockers :[]});
} //미 로그인 시에 locker 미리보기용

export const seeLocker = async(req, res) => {
    try{
        const { id } = req.params;
        const locker = await Locker.findById(id);
        if(!locker){
            return res.status(404).render("404",{pagetitle: "사물함이 없습니다."});
            };
        return res.render("seelocker", {pageTitle : `No. #{locker.number}Locker`, locker});
    }
    catch(error){
        return res.status(404).render("server-error", {error});
    }
    
    
    
}
 
export const ReturnorApplicateLocker = (req, res) => {
    const { id } = req.params;
    
    
    return res.redirect("/locker");
}

export const seePassword = (req, res) => {
    const { id } = req.params;

    return res.render("seepassword", {pageTitle : `No. Locker's Password`});
}

export const newlocker = (req,res) => {
    const { password } = req.body;

    return res.redirect("/");
}//공부용으로 두는 컨트롤러, 사용은 안할 예정 (비밀번호를 입력받아 새 사물함 개설)
