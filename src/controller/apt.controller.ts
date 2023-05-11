import { AptRepository } from "../repository/apt.repository";
import { AptService } from "../service/apt.service";

export class AptController {
    private aptService: AptService = new AptService(
        AptRepository.getQueryRepository()
    );
}