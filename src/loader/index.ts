import express, { Application } from "express";
import { connectMongo } from "./connectDatabase";
import { loadExpress } from "./express";

export const initApplication = async () => {
    connectMongo();
    const app: Application = express();
    loadExpress(app);
}