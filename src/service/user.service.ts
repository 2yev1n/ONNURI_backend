import 'dotenv/config';
import jwt from "jsonwebtoken";
import { UserRepository } from "../repository/user.repository";
import { UserInfo, UserLoginInfo } from "../shared/DataTransferObject";
import { ConflictError, NotFoundError, UnAuthorizedError } from "../shared/exception";
import { generateHash } from "../shared/hash";
import { compare } from "bcrypt";

export class UserService {
    constructor(
        private userRepository: UserRepository
    ) {}

    async createUser(userInfo: UserInfo) {
        const alreadyUserByEmail = await this.userRepository.findUserByEmail(userInfo.email);
        const alreadyUserByNickname = await this.userRepository.findUserByNickName(userInfo.nickname);
        
        const alreadyUser = alreadyUserByEmail || alreadyUserByNickname;

        if(alreadyUser) {
            throw new ConflictError();
        }

        const hashPassword = generateHash(userInfo.password);

        const userInfoCreate = { ...userInfo, password: hashPassword };
        const { id, created_at, updated_at } = await this.userRepository.createUser(userInfoCreate);

        return {
            id,
            created_at, 
            updated_at
        }
    }

    async login({ email, password }: UserLoginInfo) {
        const user = await this.userRepository.findUserByEmail(email);
        if(!user) throw new NotFoundError('User Not Found');

        const isValid = compare(user.password, password);
        if(!isValid) throw new UnAuthorizedError();
        
        return { 
            access_token: await this.issuanceToken(user.email, 'access')
        };
    }
    
    private async issuanceToken(email: string, type: string): Promise<string> {
		const user = await this.userRepository.findUserByEmail(email);
		return jwt.sign(
			{
				id: user?.id,
                apt_id: user?.apt_id,
				type,
			},
			process.env.JWT_KEY!,
			{
				algorithm: 'HS256',
				expiresIn: '1h'
			},
		);
	}
}