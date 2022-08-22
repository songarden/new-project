import bcrypt from "bcrypt";
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim:true},
    schoolID: {type: Number, required: true, trim:true, unique : true},
    password: {type: String, required: true, trim:true },
    phoneNumber: {type: Number, required: true, trim:true },
    meta: {
        available: {type: Boolean, required:true, unique : true, default: false },
        joinedDate: {type: Date, required: true, default: Date.now},
    }
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;