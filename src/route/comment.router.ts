import { Router } from "express";
import { CommentController } from "../controller/comment.controller";
import { verifyTokenLogic } from "../middleware/verifyToken";
import { errorHandler } from "../middleware/errorHandler";

const router: Router = Router();
export const CommentServiceRouter = (app: Router) => {
    const commentController: CommentController = new CommentController();

    app.use('/post/comment', router);

    router.post('/apt/:apt_id/:post_id', verifyTokenLogic, errorHandler(commentController.createComment));
}