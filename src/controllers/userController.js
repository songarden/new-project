import User from "../models/User";
import fetch from "node-fetch";
import Locker from "../models/Locker";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    //만약에 로그인이 성공할 시 조건문 삽입 예정
    
    const { schoolID, password} = req.body;
    const user = await User.findOne({schoolID});
    const lockers = await Locker.find({});
    
    if(!user){
        return res.status(400).render("home", {
        pagetitle : "Home",
        errorMessage : "존재하지 않는 학번입니다.",
        });
    }
    const ok = await bcrypt.compare(password, user.password);
    if(!ok){
        return res.status(400).render("home", {
            pagetitle : "Home",
            errorMessage : "비밀번호가 틀렸습니다.",
            });
    }

    req.session.loggedOn = true;
    req.session.user = user;
    req.session.save(function(err) {
        if(err) {
            return res.render("/500", { pagetitle: "500 loginServerError"});
        }else return res.render("locker", {pagetitle : "Lockers", lockers });
    })
    //console.log(req.body);
    
}//로그인 시에 locker보기 용

export const getEdit = (req,res) => res.send("getEdit");
export const postEdit = (req,res) => res.send("postEdit");
// export const getEdit = async(req,res) => {
//     const { id } = req.params;
//     const user = await User.findById(id);
//     if(!user) {
//         return res.render("404", {pagetitle: "User not found."});
//     }
//     res.render("edituser", {pagetitle: "회원정보 수정하기"}, user);
// }

// export const postEdit = async(req,res) => {
//     const { id } = req.params;
//     const {name, schoolID, password, phoneNumber} = req.body;
//     const user = await User.findById(id);
//     if(!user) {
//         return res.render("404", {pagetitle: "User not found."});
//     }
//     user.name = name;
//     user.schoolID = schoolID;
//     user.password = password;
//     user.phoneNumber = phoneNumber;
//     await user.save();
//     res.redirect("/locker");
// }
export const remove = (req,res) => res.send("Remove User");
export const comment = (req,res) => res.send("comment page");

export const startGithubLogin = (req,res) => {
    console.log(process.env.GH_CLIENT);
    const baseUrl = 'https://github.com/login/oauth/authorize';
    const config = {
        client_id: process.env.GH_CLIENT,
        allow_signup:false,
        scope:"read:user user:email",
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    return res.redirect(finalUrl)
};

export const finishGithubLogin = async(req,res) => {
    const baseUrl = "http://github.com/login/oauth/access_token";
    const config = {
        client_id: process.env.GH_CLIENT,
        client_secret: process.env.GH_SECRET,
        code: req.query.code
    };
    const params = new URLSearchParams(config).toString();
    const finalUrl = `${baseUrl}?${params}`;
    const data = await fetch(finalUrl, {
        method:"POST",
        headers:{
            Accept: "application/json",
        },
    });
    const json = await data.json();
    console.log(json);
    console.log(config);
}
// export const logout = (req,res) => async{
//     req.session.destroy(function(err)) {}
// }

