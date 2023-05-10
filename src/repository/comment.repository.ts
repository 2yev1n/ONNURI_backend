import { EntityRepository, Repository, getCustomRepository } from "typeorm";
import { Comment } from "../entity/comment.entity";

@EntityRepository(Comment)
export class CommentRepository extends Repository<Comment> {
    static getQueryRepository() {
        return getCustomRepository(CommentRepository);
    }
}