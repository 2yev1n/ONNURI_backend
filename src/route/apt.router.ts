import { Router } from "express";
import { AptController } from "../controller/apt.controller";

const router: Router = Router();
export const AptServiceRouter = (app: Router) => {
    const aptController: AptController = new AptController();

    app.use('/apt', router);
}