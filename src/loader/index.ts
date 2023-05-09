import express, { Application } from "express";

import { loadExpress } from "./express";
import { connectDatabase } from "./connectDatabase";

export const initApplication = async () => {
    await connectDatabase();
    const app: Application = express();
    loadExpress(app);
}