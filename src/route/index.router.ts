import { Router } from "express";
import { userSerivceRouter } from "./user.router";
import { postServiceRouter } from "./post.router";
import { LikeServiceRouter } from "./like.router";
import { CommentServiceRouter } from "./comment.router";

export const OnnuriRouter = () => {
    const app = Router();
  
    userSerivceRouter(app);
    CommentServiceRouter(app);
    LikeServiceRouter(app);
    postServiceRouter(app);

    return app;
}