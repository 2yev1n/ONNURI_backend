import { AptRepository } from "../repository/apt.repository";

export class AptService {
    constructor(
        private aptRepository: AptRepository
    ) {}

    async searchApt(search_word: string) {
        return await this.aptRepository.searchApt(search_word);
    }
}