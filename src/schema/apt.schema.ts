import mongoose, { Schema } from "mongoose";

const aptSchema = new mongoose.Schema({
    apt_name: { type: String, required: true, trim: true },
    location: { type: String, require: true },
    citizen: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});


export const Apt =  mongoose.model('Apt', aptSchema);