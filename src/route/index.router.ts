import { Router } from "express";
import { userSerivceRouter } from "./user.router";
import { postServiceRouter } from "./post.router";

export const OnnuriRouter = () => {
    const app = Router();
  
    userSerivceRouter(app);
    postServiceRouter(app);

    return app;
}