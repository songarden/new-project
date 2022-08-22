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
        return res.render("home", { pageTitle: "Home", lockers});
    } catch(error) {
        return res.render("server-error", {error});
    }
    
}//렌더링 함수는 첫번째가 절대적이고 그이후는 작동하지 않음

export const join = (req,res) => res.render("join", {pagetitle : "회원가입"});

export const joined = async (req,res) => {
    const { name, schoolID, password, phoneNumber} = req.body;
    try {
        await User.create({
            name,
            schoolID,
            password,
            phoneNumber,
             meta: {
                available : false,
             },
        }); 
        console.log("Successfully submit to DB!", req.body);
        return res.redirect("/");
    } catch(error){
        console.log(error)
        return res.render("join", {pagetitle : "회원가입", errorMessage: error._message,});
    }
};

