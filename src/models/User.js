import bcrypt from "bcrypt";
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim:true},
    schoolID: {type: Number, required: true, trim:true, unique : true , maxLength:9},
    password: {type: String, required: true, trim:true, },
    phoneNumber: {type: Number, required: true, trim:true, maxLength:11 },
    meta: {
        available: {type: Boolean, default: false },
        joinedDate: {type: Date, default: Date.now},
    }
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 5);
});

// userSchema.pre("limit_number", function numberMaxLength(e){
//     if(e.value.length > e.maxLength){
//         e.value = e.value.slice(0, e.maxLength);
//     }

// })number을 제한하기 위한 함순데 손좀 봐야됌 , pug에 oninput이 여기랑 연동

const User = mongoose.model("User", userSchema);
export default User;