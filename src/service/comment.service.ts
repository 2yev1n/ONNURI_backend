import { CommentRepository } from "../repository/comment.repository";

export class CommentService {
    constructor(
        private commentRepository: CommentRepository
    ) {}
}