import 'dotenv/config';
import bcrypt from "bcrypt";

export const generateHash = (password: string): string => {
    const salt = +process.env.SALT!;
    return bcrypt.hashSync(password, salt);
}

export const compareHash = (hashPW: string, password: string): boolean => {
    return (password && bcrypt.compareSync(password, hashPW)) || false;
}