import Locker from "../models/Locker"

export const login = (req, res) => {
    //만약에 로그인이 성공할 시 조건문 삽입 예정
    Locker.find({}, (error, lockers) => {
        return res.render("locker", {pageTitle : "Lockers", lockers: [] });
    });
    console.log(req.body);
    
}

export const getLock = (req, res) => {
    
    return res.render("locker", {pageTitle : "Lockers"});
} //login시

export const loginLock = (req, res) => {
    return res.render("locker", {pageTitle : "Lockers"});
} //미리보기 view

export const seeLocker = (req, res) => {
    const { id } = req.params;

    return res.render("seelocker", {pageTitle : `No. Locker`});
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
