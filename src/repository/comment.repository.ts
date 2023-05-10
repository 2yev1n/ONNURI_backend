import { EntityRepository, Repository, getCustomRepository } from "typeorm";
import { Comment } from "../entity/comment.entity";
import { CommentInfo } from "../shared/DataTransferObject";

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
    static getQueryRepository() {
        return getCustomRepository(CommentRepository);
    }

    async createComment(commentInfo: CommentInfo): Promise<Comment> {
        const newComment = this.create(commentInfo);

        return await this.save(newComment);
    }
}