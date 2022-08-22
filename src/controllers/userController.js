import User from "../models/User";


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
