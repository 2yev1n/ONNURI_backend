import { NoticeRepository } from "../repository/notice.repository";
import { NoticeService } from "../service/notice.service";
import { BusinessLogic } from "../shared/BusinessLogicInterface";

export class NoticeController {
    private noticeService: NoticeService = new NoticeService(
        NoticeRepository.getQueryRepository()
    );

    public createNotice: BusinessLogic = async(req, res, next) => {
        const apt_id = +req.params.apt_id;
        const reqNoticeInfo = req.body;

        const response = await this.noticeService.createNotice(apt_id, reqNoticeInfo);

        return res.status(201).json(response);
    }
}