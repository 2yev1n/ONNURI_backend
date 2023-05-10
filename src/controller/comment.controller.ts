import { CommentRepository } from "../repository/comment.repository";
import { CommentService } from "../service/comment.service";

export class CommentController {
    private commentService: CommentService = new CommentService(
        CommentRepository.getQueryRepository()
    );
}