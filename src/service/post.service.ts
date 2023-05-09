import { User } from "../entity/user.entity";
import { PostRepository } from "../repository/post.repository";
import { CreatePostInfo, PostInfo } from "../shared/DataTransferObject";

export class PostService {
    constructor(
        private postRepository: PostRepository
    ) {}

    async createPost(createPostInfo: CreatePostInfo, user: User) {
        const postInfo: PostInfo = { ...createPostInfo, user_id: user.id, apt_id: user.apt_id };
        return await this.postRepository.createPost(postInfo);
    }
}