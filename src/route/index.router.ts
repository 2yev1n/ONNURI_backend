import { Router } from "express";
import { userSerivceRouter } from "./user.router";
import { postServiceRouter } from "./post.router";
import { LikeServiceRouter } from "./like.router";
import { CommentServiceRouter } from "./comment.router";
import { AptServiceRouter } from "./apt.router";

export const OnnuriRouter = () => {
    const app = Router();
  
    userSerivceRouter(app);
    AptServiceRouter(app);
    CommentServiceRouter(app);
    LikeServiceRouter(app);
    postServiceRouter(app);

    return app;
}