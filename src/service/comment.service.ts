import { Comment } from "../entity/comment.entity";
import { User } from "../entity/user.entity";
import { CommentRepository } from "../repository/comment.repository";
import { CommentInfo } from "../shared/DataTransferObject";
import { ForbiddenError, NotFoundError } from "../shared/exception";

export class CommentService {
    constructor(
        private commentRepository: CommentRepository
    ) {}

    async createComment(post_id: number, content: string, user: User): Promise<Comment> {
        const commentInfo: CommentInfo = { post_id, content, user_id: user.id };

        return await this.commentRepository.createComment(commentInfo);
    }

    async deleteComment(comment_id: number, user: User) {
        const comment = await this.commentRepository.findOneComment(comment_id);

        if(!comment) throw new NotFoundError('Not Found Comment');

        if(comment?.user_id !== user.id) throw new ForbiddenError();

        return await this.commentRepository.deleteComment(comment_id);
    }

    async findCommentOfPost(post_id: number): Promise<Comment[]> {
        return await this.commentRepository.findCommentOfPost(post_id);
    }
}