import dotenv from "dotenv";
import path from "path";
import { initApplication } from "./loader";

dotenv.config({ path: path.join(__dirname, '../.env') });

initApplication().catch((err) => console.error(err));