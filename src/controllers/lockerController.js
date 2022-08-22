import Locker from "../models/Locker";

export const login = async (req, res) => {
    //만약에 로그인이 성공할 시 조건문 삽입 예정
    const lockers = await Locker.find({});
    console.log(req.body);
    return res.render("locker", {pagetitle : "Lockers", lockers });
}//로그인 시에 locker보기 용

export const getLock = (req, res) => {
    
    return res.render("locker", {pagetitle : "Lockers", lockers :[]});
} //미 로그인 시에 locker 미리보기용

export const seeLocker = async(req, res) => {
    const { id } = req.params;
    const locker = await Locker.findById(id);
    if(!locker){
        return res.render("404",{pagetitle: "Locker not found."});
    }
    return res.render("seelocker", {pageTitle : `No. #{locker.number}Locker`, locker});
    
    
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
