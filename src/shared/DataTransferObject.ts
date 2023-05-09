import { User } from "../entity/user.entity";

export class UserInfo {
    email: string;
    password: string;
    nickname: string;
    apt_id: number;
    detail_address: string;
}

export class UserLoginInfo {
    email: string;
    password: string;
}

export class CreatePostInfo {
    title: string;
    content: string;
}

export class PostInfo {
    title: string;
    content: string;
    user_id: number;
    apt_id: number;
}