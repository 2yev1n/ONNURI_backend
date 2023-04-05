import 'dotenv/config';
import { ConnectionOptions } from 'typeorm';

import { User } from '../entity/user.entity';
import { Apt } from '../entity/apt.entity';
import { Post } from '../entity/post.entity';
import { Notice } from '../entity/notice.entity';

export const createOptions: ConnectionOptions = {
	type: 'mysql',
	host: process.env.DB_HOST,
	port: +process.env.DB_PORT!,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: true,
	timezone: 'Z',
	entities: [User, Apt, Post, Notice],
	charset: 'utf8mb4'
};