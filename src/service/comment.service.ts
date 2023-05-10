import { Comment } from "../entity/comment.entity";
import { User } from "../entity/user.entity";
import { CommentRepository } from "../repository/comment.repository";
import { CommentInfo } from "../shared/DataTransferObject";

export class CommentService {
    constructor(
        private commentRepository: CommentRepository
    ) {}

    async createComment(post_id: number, content: string, user: User): Promise<Comment> {
        const commentInfo: CommentInfo = { post_id, content, user_id: user.id };

        return await this.commentRepository.createComment(commentInfo);
    }
}