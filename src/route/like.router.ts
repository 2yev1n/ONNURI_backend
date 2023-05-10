import { Router } from "express";
import { LikeController } from "../controller/like.controller";
import { verifyTokenLogic } from "../middleware/verifyToken";
import { errorHandler } from "../middleware/errorHandler";

const router: Router = Router();
export const LikeServiceRouter = (app: Router) => {
    const likeController: LikeController = new LikeController();

    app.use('/post/like', router);

    router.post('/:post_id', verifyTokenLogic, errorHandler(likeController.likePost));
}