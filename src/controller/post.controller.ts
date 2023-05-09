import { PostRepository } from "../repository/post.repository";
import { PostService } from "../service/post.service";
import { BusinessLogic } from "../shared/BusinessLogicInterface";
import { CreatePostInfo } from "../shared/DataTransferObject";

export class PostController {
    private postService: PostService = new PostService(PostRepository.getQueryRepository());

    public createPost: BusinessLogic = async(req, res, next) => {
        const createPostInfo = req.body as CreatePostInfo; 
        const user = (<any>req).decoded;

        const response = await this.postService.createPost(createPostInfo, user);
        
        return res.status(201).json(response);
    }
}