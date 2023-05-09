import { UserRepository } from "../repository/user.repository";
import { UserService } from "../service/user.service";
import { BusinessLogic } from "../shared/BusinessLogicInterface";
import { UserInfo, UserLoginInfo } from "../shared/DataTransferObject";

export class UserController {
    private userService: UserService = new UserService(UserRepository.getQueryRepository());


    public createUser: BusinessLogic = async(req, res, next) => {
        const userInfo = req.body as UserInfo;

        const response = await this.userService.createUser(userInfo);
        return res.status(201).json(response);
    }

    public login: BusinessLogic = async(req, res, next) => {
        const userLoginInfo = req.body as UserLoginInfo;

        const response = await this.userService.login(userLoginInfo);
        return res.status(200).json(response);
    }
}