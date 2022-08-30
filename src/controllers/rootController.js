import Locker from "../models/Locker";
import User from "../models/User";
// export const home = (req, res) => {
//     Locker.find({}, (error, lockers) => {
//         if(error){
//             return res.render("server-error");
//         }
//         return res.render("home", {pageTitle : "Home", lockers :[]});
//     });
//     //Locker.find는 callback 함수로 위처럼 코드 작성시
//      DB 연결이 된후 렌더링하게 해줌
     
// } callback way


export const home = async(req, res) => {
    try{
        const lockers = await Locker.find({});
        return res.render("home", { pagetitle: "Home", lockers});
    } catch(error) {
        return res.status(404).render("server-error", {error});
    }
    
}//렌더링 함수는 첫번째가 절대적이고 그이후는 작동하지 않음

export const join = (req,res) => res.render("join", {pagetitle : "회원가입"});

export const joined = async (req,res) => {
    const { name, schoolID, password, passwordAgain,  phoneNumber} = req.body;
    if(password !== passwordAgain){
        return res.status(400).render("join", {
            pagetitle:"join",
            errorMessage:"비밀번호 확인이 서로 일치하지 않습니다.",
        });
    }
    const Exists = await User.exists({ $or : [{schoolID}] });
    if (Exists){
       return res.status(400).render("join", 
       { pagetitle: "Join",
       errorMessage: "이 학번으로 회원이 이미 존재입니다.",
        }); 
    }
    try {
        await User.create({
            name,
            schoolID,
            password,
            phoneNumber,
            //  meta: {
            //     available : false,
            //  },
        }); 
        console.log("Successfully submit to DB!", req.body);
        return res.redirect("/");
    } catch(error){
        console.log(error)
        return res.status(400).render("join", {
            pagetitle : "회원가입",
             errorMessage: error._message,
            });
    }
};

