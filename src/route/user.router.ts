import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { errorHandler } from "../middleware/errorHandler";

const router: Router = Router();
export const userSerivceRouter = (app: Router) => {
    const userController: UserController = new UserController();

    app.use('/user', router);

    router.post('/', errorHandler(userController.createUser));
    router.post('/login', errorHandler(userController.login));
}