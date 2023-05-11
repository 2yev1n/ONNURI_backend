import { Router } from "express";
import { AptController } from "../controller/apt.controller";
import { verifyTokenLogic } from "../middleware/verifyToken";
import { errorHandler } from "../middleware/errorHandler";

const router: Router = Router();
export const AptServiceRouter = (app: Router) => {
    const aptController: AptController = new AptController();

    app.use('/apt', router);

    router.get('/search', verifyTokenLogic, errorHandler(aptController.searchApt));
}