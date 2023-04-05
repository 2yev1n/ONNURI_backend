import dotenv from "dotenv";
import path from "path";
import { initApplication } from "./loader";

dotenv.config({ path: path.join(__dirname, '../.env') });

initApplication().catch(() => console.error('서버 작동 실패'));