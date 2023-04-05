import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    apt: { type: Number, ref: 'Apt'},
    detail: String
});

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    nickname: { type: String, required: true },
    password: { type: String, required: true, trim: true },
    address: addressSchema
});


export const User =  mongoose.model('User', userSchema);