import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";
import { Post } from "./post.entity";

@Entity({ name: 'like' })
export class Like {
    @PrimaryColumn()
    user_id: number;

    @PrimaryColumn()
    post_id: number;

    @ManyToOne(() => User, user => user.id, { nullable: false, onDelete: 'CASCADE' })
	@JoinColumn({ name: 'user_id' })
	user: User;

    @ManyToOne(() => Post, post => post.id, { nullable: false, onDelete: 'CASCADE' })
	@JoinColumn({ name: 'post_id' })
	post: Post;
}