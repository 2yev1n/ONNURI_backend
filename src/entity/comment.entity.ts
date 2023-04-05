import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Post } from "./post.entity";

@Entity({ name: 'comment' })
export class  Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', charset: 'utf8mb4', collation: 'utf8mb4_general_ci', length: 255 })
    comment: string;

    @Column()
    post_id: number;

    @Column()
    user_id: number;

    @ManyToOne(() => User, user => user.id, { nullable: false, onDelete: 'CASCADE' })
	@JoinColumn({ name: 'user_id' })
	user: User;

    @ManyToOne(() => Post, post => post.id, { nullable: false, onDelete: 'CASCADE' })
	@JoinColumn({ name: 'post_id' })
	post: Post;
}