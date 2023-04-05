import 'dotenv/config';
import mongoose from "mongoose";
import { User } from './user.schema';
import { Apt } from './apt.schema';

export const createCollections = {
    mongoose: mongoose,
    url: process.env.DB_URL,
    user: User,
    apt: Apt
    };
      