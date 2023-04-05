import 'dotenv/config';
import mongoose from "mongoose";
import { createCollections } from '../schema/index.schema';

export const connectMongo = () => {
    mongoose.connect(process.env.DB_URL!)
    .then(() => console.log('데이터베이스 연결 성공'))
    .catch((err) => {
        console.log(err)
    })
    createCollections;   
}