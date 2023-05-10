import { Router } from "express";
import { userSerivceRouter } from "./user.router";
import { postServiceRouter } from "./post.router";
import { LikeServiceRouter } from "./like.router";

export const OnnuriRouter = () => {
    const app = Router();
  
    userSerivceRouter(app);
    LikeServiceRouter(app);
    postServiceRouter(app);

    return app;
}