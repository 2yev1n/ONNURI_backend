import { EntityRepository, Repository, getCustomRepository } from "typeorm";
import { Apt } from "../entity/apt.entity";

@EntityRepository(Apt)
export class AptRepository extends Repository<Apt> {
    static getQueryRepository() {
        return getCustomRepository(AptRepository);
    }
}