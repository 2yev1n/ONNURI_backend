import { EntityRepository, Repository, getCustomRepository } from "typeorm";
import { Notice } from "../entity/notice.entity";
import { NoticeInfo } from "../shared/DataTransferObject";

@EntityRepository(Notice)
export class NoticeRepository extends Repository<Notice> {
    static getQueryRepository() {
        return getCustomRepository(NoticeRepository);
    }

    async createNotice(noticeInfo: NoticeInfo): Promise<Notice> {
        const newNotice = this.create(noticeInfo);
        return await this.save(newNotice);
    }
}