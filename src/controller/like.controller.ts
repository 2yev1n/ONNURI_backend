import { LikeRepository } from "../repository/like.repository";
import { PostRepository } from "../repository/post.repository";
import { LikeService } from "../service/like.service";
import { BusinessLogic } from "../shared/BusinessLogicInterface";

export class LikeController {
    private likeService: LikeService = new LikeService(
        LikeRepository.getQueryRepository(),
        PostRepository.getQueryRepository()
    );

    public likePost: BusinessLogic = async(req, res, next) => {
        const post_id = +req.params.post_id;
        const user = (<any>req).decoded;

        const response = await this.likeService.likePost(post_id, user);

        return res.status(201).json(response);
    }
}