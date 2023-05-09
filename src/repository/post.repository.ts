import { EntityRepository, Repository, getCustomRepository } from "typeorm";
import { Post } from "../entity/post.entity";
import { CreatePostInfo } from "../shared/DataTransferObject";

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
    static getQueryRepository() {
        return getCustomRepository(PostRepository);
    }

    async createPost(createPostInfo: CreatePostInfo): Promise<Post> {
        const newPost = this.create(createPostInfo);

        return await this.save(newPost);
    }
}