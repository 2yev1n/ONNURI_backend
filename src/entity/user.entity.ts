import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { Apt } from "./apt.entity";
import { Post } from "./post.entity";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 20 })
    nickname: string;

    @Column({ unique: true, length: 40 })
    email: string;

    @Column({ length: 30 })
    password: string;

    @Column()
    apt_id: string;

    @Column()
    detail_address: string;

    @CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt: Date;

    @ManyToOne(() => Apt, apt => apt.id, { nullable: false, onDelete: 'CASCADE' })
	@JoinColumn({ name: 'apt_id' })
	apt: Apt;

    @OneToMany(() => Post, post => post.user, { cascade: true })
    post: Post[];
}