import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { User } from "./user.entity";
import { Apt } from "./apt.entity";
import { Comment } from "./comment.entity";
import { Like } from "./like.entity";

@Entity({ name: 'post' })
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', charset: 'utf8mb4', collation: 'utf8mb4_general_ci', length: 30 })
    title: string;

    @Column({ type: 'varchar', charset: 'utf8mb4', collation: 'utf8mb4_general_ci', length: 255 })
    content: string;

    @Column()
    user_id: number;

    @Column()
    apt_id: number;

    @CreateDateColumn({ type: 'timestamp' })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	updated_at: Date;

    @ManyToOne(() => User, user => user.id, { nullable: false, onDelete: 'CASCADE' })
	@JoinColumn({ name: 'user_id' })
	user: User;

    @ManyToOne(() => Apt, apt => apt.id, { nullable: false, onDelete: 'CASCADE' })
	@JoinColumn({ name: 'apt_id' })
	apt: Apt;

    @OneToMany(() => Comment, comment => comment.post, { cascade: true })
    comment: Comment[];

    @OneToMany(() => Like, like => like.post, { cascade: true })
    like: Like[];
}
