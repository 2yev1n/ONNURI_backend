import { PostRepository } from "../repository/post.repository";
import { PostService } from "../service/post.service";
import { BusinessLogic } from "../shared/BusinessLogicInterface";
import { EditPostInfo } from "../shared/DataTransferObject";

export class PostController {
    private postService: PostService = new PostService(PostRepository.getQueryRepository());

    public createPost: BusinessLogic = async(req, res, next) => {
        const createPostInfo = req.body as EditPostInfo; 
        const user = (<any>req).decoded;

        const response = await this.postService.createPost(createPostInfo, user);

        return res.status(201).json(response);
    }

    public updatePost: BusinessLogic = async(req, res, next) => {
        const updatePostInfo = req.body as EditPostInfo;
        const post_id = +req.params.post_id;
        const user = (<any>req).decoded;

        const response = await this.postService.updatePost(updatePostInfo, post_id, user);

        return res.status(200).json(response);
    }

    public findOnePost: BusinessLogic = async(req, res, next) => {
        const post_id = +req.params.post_id;

        const response = await this.postService.findOnePost(post_id);

        return res.status(200).json(response);
    }

    public findAllPost: BusinessLogic = async(req, res, next) => {
        const apt_id = +req.params.apt_id;

        const response = await this.postService.findAllPost(apt_id);

        return res.status(200).json(response);
    }
}