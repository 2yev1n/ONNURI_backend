import { Router } from "express";
import { PostController } from "../controller/post.controller";
import { verifyTokenLogic } from "../middleware/verifyToken";
import { errorHandler } from "../middleware/errorHandler";

const router: Router  = Router();
export const postServiceRouter = (app: Router) => {
    const postController: PostController = new PostController();

    app.use('/apt', router);

    router.post('/:apt_id/post', verifyTokenLogic, errorHandler(postController.createPost));
    router.patch('/:apt_id/post/:post_id', verifyTokenLogic, errorHandler(postController.updatePost));
    router.delete('/:apt_id/post/:post_id', verifyTokenLogic, errorHandler(postController.deletePost));
    router.get('/:apt_id/post/:post_id', verifyTokenLogic, errorHandler(postController.findOnePost));
    router.get('/:apt_id/post', verifyTokenLogic, errorHandler(postController.findAllPost));
    router.get('/:apt_id/search', verifyTokenLogic, errorHandler(postController.searchPost));
}