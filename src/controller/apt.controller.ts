import { AptRepository } from "../repository/apt.repository";
import { AptService } from "../service/apt.service";
import { BusinessLogic } from "../shared/BusinessLogicInterface";

export class AptController {
    private aptService: AptService = new AptService(
        AptRepository.getQueryRepository()
    );

    public searchApt: BusinessLogic = async(req, res, next) => {
        const search_word = req.query.where as string;

        const response = await this.aptService.searchApt(search_word);

        return res.status(200).json(response);
    }
}