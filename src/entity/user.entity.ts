import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { Apt } from "./apt.entity";
import { Post } from "./post.entity";
import { Comment } from "./comment.entity";
import { Like } from "./like.entity";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 20 })
    nickname: string;

    @Column({ unique: true, length: 40 })
    email: string;

    @Column()
    password: string;

    @Column()
    apt_id: number;

    @Column()
    detail_address: string;

    @CreateDateColumn({ type: 'timestamp' })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	updated_at: Date;

    @ManyToOne(() => Apt, apt => apt.id, { nullable: false, onDelete: 'CASCADE' })
	@JoinColumn({ name: 'apt_id' })
	apt: Apt;

    @OneToMany(() => Post, post => post.user, { cascade: true })
    post: Post[];

    @OneToMany(() => Comment, comment => comment.user, { cascade: true })
    comment: Comment[];

    @OneToMany(() => Like, like => like.post, { cascade: true })
    like: Like[];
}