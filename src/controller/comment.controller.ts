import { CommentRepository } from "../repository/comment.repository";
import { CommentService } from "../service/comment.service";
import { BusinessLogic } from "../shared/BusinessLogicInterface";

export class CommentController {
    private commentService: CommentService = new CommentService(
        CommentRepository.getQueryRepository()
    );

    public createComment: BusinessLogic = async(req, res, next) => {
        const post_id = +req.params.post_id;
        const content = req.body.content;
        const user = (<any>req).decoded;
        
        const response = await this.commentService.createComment(post_id, content, user);

        return res.status(201).json(response);
    }
}