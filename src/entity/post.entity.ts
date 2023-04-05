import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { User } from "./user.entity";
import { Apt } from "./apt.entity";

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
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt: Date;

    @ManyToOne(() => User, user => user.id, { nullable: false, onDelete: 'CASCADE' })
	@JoinColumn({ name: 'user_id' })
	user: User;

    @ManyToOne(() => Apt, apt => apt.id, { nullable: false, onDelete: 'CASCADE' })
	@JoinColumn({ name: 'apt_id' })
	apt: Apt;
}
