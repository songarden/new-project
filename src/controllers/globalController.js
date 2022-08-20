import Locker from "../models/Locker"


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
    
}

