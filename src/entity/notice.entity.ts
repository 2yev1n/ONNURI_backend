import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { Apt } from "./apt.entity";

@Entity({ name: 'notice' })
export class Notice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    apt_id: number;

    @Column({ type: 'varchar', charset: 'utf8mb4', collation: 'utf8mb4_general_ci', length: 30 })
    title: string;

    @Column({ type: 'varchar', charset: 'utf8mb4', collation: 'utf8mb4_general_ci', length: 255 })
    content: string;

    @CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;

	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt: Date;

    @ManyToOne(() => Apt, apt => apt.id, { nullable: false, onDelete: 'CASCADE' })
	@JoinColumn({ name: 'apt_id' })
	apt: Apt;
}