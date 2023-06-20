import { NoticeRepository } from "../repository/notice.repository";
import { NoticeService } from "../service/notice.service";
import { BusinessLogic } from "../shared/BusinessLogicInterface";
import { ReqNoticeInfo } from "../shared/DataTransferObject";

export class NoticeController {
    private noticeService: NoticeService = new NoticeService(
        NoticeRepository.getQueryRepository()
    );

    public createNotice: BusinessLogic = async(req, res, next) => {
        const apt_id = +req.params.apt_id;
        const reqNoticeInfo = req.body as ReqNoticeInfo;

        const response = await this.noticeService.createNotice(apt_id, reqNoticeInfo);

        return res.status(201).json(response);
    }

    public deleteNotice: BusinessLogic = async(req, res, next) => {
        const notice_id = +req.params.notice_id;
        
        const response = await this.noticeService.deleteNotice(notice_id);

        return res.status(200).json({ meesage : 'Delete Notice Success' });
    }

    public findAllNotice: BusinessLogic = async(req, res, next) => {
        const apt_id = +req.params.apt_id;

        const response = await this.noticeService.findAllNotice(apt_id);

        return res.status(200).json(response);
    }

    public findOneNotice: BusinessLogic = async(req, res, next) => {
        const notice_id = +req.params.notice_id;

        const response = await this.noticeService.findOneNotice(notice_id);

        return res.status(200).json(response);
    }
}