import { Notice } from "../entity/notice.entity";
import { User } from "../entity/user.entity";
import { NoticeRepository } from "../repository/notice.repository";
import { NoticeInfo, ReqNoticeInfo } from "../shared/DataTransferObject";
import { NotFoundError } from "../shared/exception";

export class NoticeService {
    constructor(
        private noticeRepository: NoticeRepository
    ) {}

    async createNotice(apt_id: number, reqNoticeInfo: ReqNoticeInfo): Promise<Notice> {
        const noticeInfo: NoticeInfo = { ...reqNoticeInfo, apt_id };
        return await this.noticeRepository.createNotice(noticeInfo);
    }

    async deleteNotice(notice_id: number) {
        const notice = await this.noticeRepository.findOneNotice(notice_id);

        if(!notice) throw new NotFoundError();
        return await this.noticeRepository.deleteNotice(notice_id);
    }
}