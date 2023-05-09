import 'dotenv/config';
import { ConnectionOptions } from 'typeorm';

import { User } from '../entity/user.entity';
import { Apt } from '../entity/apt.entity';
import { Like } from '../entity/like.entity';
import { Post } from '../entity/post.entity';
import { Notice } from '../entity/notice.entity';
import { Comment } from '../entity/comment.entity';

export const createOptions: ConnectionOptions = {
	type: 'mysql',
	host: process.env.DB_HOST,
	port: +process.env.DB_PORT!,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: false,
	logging: false,
	timezone: 'Z',
	entities: [Post, User, Apt, Comment, Like, Notice],
	charset: 'utf8mb4' 
};