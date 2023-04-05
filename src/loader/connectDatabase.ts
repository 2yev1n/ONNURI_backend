import { createConnection } from 'typeorm';
import { createOptions } from '../config/ormconfig';

export const connectDatabase = () => {
		createConnection(createOptions)
			.then(() => console.log('데이터베이스 연결 성공'))
			.catch(err => {
				console.error(err);
			});
};