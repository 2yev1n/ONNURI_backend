import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./user.entity";
import { Post } from "./post.entity";

@Entity({ name: 'apt' })
export class Apt {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    apt_name: string;

    @Column({ unique: true })
    location: string;

    @OneToMany(() => User, user => user.apt, { cascade: true })
    user: User[];

    @OneToMany(() => Post, post => post.apt, { cascade: true })
    post: Post[];
}