import { Router } from "express";
import { PostController } from "../controller/post.controller";
import { verifyTokenLogic } from "../middleware/verifyToken";

const router: Router  = Router();
export const postServiceRouter = (app: Router) => {
    const postController: PostController = new PostController();

    app.use('/post', router);

    router.post('/', verifyTokenLogic, postController.createPost);
}