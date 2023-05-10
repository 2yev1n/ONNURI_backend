import { User } from "../entity/user.entity";
import { PostRepository } from "../repository/post.repository";
import { EditPostInfo, PostInfo } from "../shared/DataTransferObject";
import { ForbiddenError } from "../shared/exception";

export class PostService {
    constructor(
        private postRepository: PostRepository
    ) {}

    async createPost(editPostInfo: EditPostInfo, user: User) {
        const postInfo: PostInfo = { ...editPostInfo, user_id: user.id, apt_id: user.apt_id };
        return await this.postRepository.createPost(postInfo);
    }

    async updatePost(editPostInfo: EditPostInfo, post_id: number, user: User) {
        const post = await this.postRepository.findOnePost(post_id);
        
        if (post?.user_id !== user.id) throw new ForbiddenError();
        
        return await this.postRepository.updatePost(post_id, editPostInfo);
    }

    async findOnePost(post_id: number) {
        return await this.postRepository.findOnePost(post_id);
    }

    async findAllPost(apt_id: number) {
        return await this.postRepository.findAllPost(apt_id);
    }

    async searchPost(apt_id: number, search_word: string) {
        return await this.postRepository.searchPost(apt_id, search_word);
    }
}