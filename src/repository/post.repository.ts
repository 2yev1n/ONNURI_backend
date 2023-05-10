import { EntityRepository, Repository, getCustomRepository } from "typeorm";
import { Post } from "../entity/post.entity";
import { EditPostInfo } from "../shared/DataTransferObject";

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
    static getQueryRepository() {
        return getCustomRepository(PostRepository);
    }

    async createPost(editPostInfo: EditPostInfo): Promise<Post> {
        const newPost = this.create(editPostInfo);

        return await this.save(newPost);
    }

    async updatePost(post_id: number, editPostInfo: EditPostInfo): Promise<Post | undefined> {
        this.update(post_id, editPostInfo);

        return await this.findOne(post_id);
    }
    
    async findOnePost(post_id: number): Promise<Post | undefined> {
        return await this.createQueryBuilder('post')
            .select('post.id')
            .addSelect('post.title')
            .addSelect('post.content')
            .addSelect('post.apt_id')
            .addSelect('post.createdAt')
            .addSelect('post.updatedAt')
            .addSelect('user.nickname')
            .addSelect('apt.name')
            .innerJoin('post.user', 'user')
            .innerJoin('post.apt', 'apt')
            .where('post.id = :post_id', { post_id })
            .getRawOne();
    }

    async findAllPost(apt_id: number): Promise<Post[]> {
        return await this.createQueryBuilder('post')
            .select('post.id')
            .addSelect('post.title')
            .addSelect('post.content')
            .addSelect('post.apt_id')
            .addSelect('post.createdAt')
            .addSelect('post.updatedAt')
            .addSelect('user.nickname')
            .addSelect('apt.name')
            .innerJoin('post.user', 'user')
            .innerJoin('post.apt', 'apt')
            .where('post.apt_id = :apt_id', { apt_id })
            .getRawMany();
    }

    async searchPost(apt_id: number, search_word: string): Promise<Post[]> {
            return this.createQueryBuilder('post')
            .select('post.id')
            .addSelect('post.title')
            .addSelect('post.content')
            .addSelect('post.apt_id')
            .addSelect('post.createdAt')
            .addSelect('post.updatedAt')
            .addSelect('user.nickname')
            .addSelect('apt.name')
            .innerJoin('post.user', 'user')
            .innerJoin('post.apt', 'apt')
            .where('post.apt_id = :apt_id', { apt_id })
            .where('post.title like :search_word OR post.content like :search_word',
            { search_word: `%${search_word}%` })
            .getRawMany();
    }
}