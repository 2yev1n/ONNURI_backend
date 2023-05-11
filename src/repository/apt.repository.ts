import { EntityRepository, Like, Repository, getCustomRepository } from "typeorm";
import { Apt } from "../entity/apt.entity";

@EntityRepository(Apt)
export class AptRepository extends Repository<Apt> {
    static getQueryRepository() {
        return getCustomRepository(AptRepository);
    }

    async searchApt(search_word: string): Promise<Apt[]> {
        return await this.find({ name: Like(`%${search_word}%`) });
    }
}