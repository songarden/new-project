import mongoose from "mongoose";

const lockerSchema = new mongoose.Schema({
    number: String,
    available: Boolean,
    meta:{
        password : Number,
    }
});

//이런식으로 DB에 저장될 예정
// const locker = {
//     title:"hello",
//     description:"lalala",
//     createdAt:12121212,
//     hashtags:[
//         "#hi",
//         "#mongo"
//     ]
// }

const Locker = mongoose.model("Locker", lockerSchema);
export default Locker;