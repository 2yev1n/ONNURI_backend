import { User } from "../entity/user.entity";
import { LikeRepository } from "../repository/like.repository";
import { PostRepository } from "../repository/post.repository";
import { NotFoundError } from "../shared/exception";

export class LikeService {
    constructor(
        private likeRepository: LikeRepository,
        private postRepository: PostRepository,
    ) {}

    async likePost(post_id: number, user: User) {
        const post = await this.postRepository.findOnePost(post_id);
        if(!post) throw new NotFoundError('Not Found Post');

        const like = await this.likeRepository.findOneLike(post_id, user);

        if(!like) return this.likeRepository.likePost(post_id, user);
        else return this.likeRepository.cancelLikePost(post_id, user);
    } 
}