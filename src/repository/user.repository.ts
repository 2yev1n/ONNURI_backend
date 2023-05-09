import { EntityRepository, Repository, getCustomRepository } from "typeorm";
import { User } from "../entity/user.entity";
import { UserInfo } from "../shared/DataTransferObject";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    static getQueryRepository() {
		return getCustomRepository(UserRepository);
	}

    async createUser(userInfo: UserInfo): Promise<User> {
        const newUser = this.create(userInfo);

        return await this.save(newUser);
    }

    async findUserByEmail(email: string): Promise<User | undefined> {
        return await this.findOne({ email });
    }

    async findUserByNickName(nickname: string): Promise<User | undefined> {
        return await this.findOne({ nickname });
    }
}
