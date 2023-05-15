import { EntityRepository, Repository, getCustomRepository } from "typeorm";
import { Like } from "../entity/like.entity";
import { User } from "../entity/user.entity";

@EntityRepository(Like)
export class LikeRepository extends Repository<Like> {
    static getQueryRepository() {
        return getCustomRepository(LikeRepository);
    }

    async likePost(post_id: number, user: User): Promise<Like> {
        const newLike = this.create({ post_id, user_id: user.id });

        return await this.save(newLike);
    }

    async cancelLikePost(post_id: number, user: User) {
        return await this.delete({ post_id, user_id: user.id });
    }

    async findOneLike(post_id: number, user: User): Promise<Like | undefined> {
        return await this.findOne({ post_id, user_id: user.id });
    }
}