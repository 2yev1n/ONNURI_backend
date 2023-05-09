import { Router } from "express";
import { UserController } from "../controller/user.controller";

const router: Router = Router();
export const userSerivceRouter = (app: Router) => {
    const userController: UserController = new UserController();

    app.use('/user', router);

    router.post('/', userController.createUser);
    router.post('/login', userController.login);
}