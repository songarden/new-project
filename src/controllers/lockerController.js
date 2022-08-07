let lockers = [
    {number : 1, available : true, id : 1, password : 1034},
    {number : 2, available : false, id : 2, password : 1204},
    {number : 3, available : true, id : 3, password : 1230}
];
export const login = (req, res) => {
    //만약에 로그인이 성공할 시 조건문 삽입 예정
    console.log(req.body);
    return res.render("locker", {pageTitle : "Lockers", lockers});
}

export const getLock = (req, res) => {
    return res.render("locker", {pageTitle : "Lockers", lockers});
} //login시

export const loginLock = (req, res) => {
    return res.render("locker", {pageTitle : "Lockers", lockers});
} //미리보기 view

export const seeLocker = (req, res) => {
    const { id } = req.params;
    const locker = lockers[id-1];

    return res.render("seelocker", {pageTitle : `No. ${locker.number} Locker`, lockers});
}
 
export const ReturnorApplicateLocker = (req, res) => {
    const { id } = req.params;
    if (lockers[id - 1].available == true)
    {
        lockers[id - 1].available = false
    }
    else{
        lockers[id - 1].available = true
    }
    
    return res.redirect("/locker");
}

export const seePassword = (req, res) => {
    const { id } = req.params;
    const locker = lockers[id-1];

    return res.render("seepassword", {pageTitle : `No. ${locker.number} Locker's Password`, locker});
}

export const newlocker = (req,res) => {
    const { password } = req.body;
    const newLocker = {
        number : lockers.length + 1,
        available : true,
        id : lockers.length + 1,
        password,
    };
    lockers.push(newLocker);
    return res.redirect("/");
}//공부용으로 두는 컨트롤러, 사용은 안할 예정 (비밀번호를 입력받아 새 사물함 개설)
