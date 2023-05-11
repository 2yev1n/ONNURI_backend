import { AptRepository } from "../repository/apt.repository";

export class AptService {
    constructor(
        private aptRepository: AptRepository
    ) {}
}