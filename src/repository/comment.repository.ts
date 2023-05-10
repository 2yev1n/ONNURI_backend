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

    async findCommentOfPost(post_id: number): Promise<Comment[]> {
        return await this.createQueryBuilder('comment')
            .select('comment.id')
            .addSelect('comment.content')
            .addSelect('comment.post_id')
            .addSelect('comment.user_id')
            .addSelect('comment.createdAt')
            .addSelect('comment.updatedAt')
            .addSelect('user.nickname')
            .innerJoin('comment.user', 'user')
            .where('comment.post_id = :post_id', { post_id })
            .getMany();
    }
}