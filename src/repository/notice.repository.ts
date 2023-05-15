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

    async deleteNotice(notice_id: number) {
        return await this.delete(notice_id);
    }

    async findOneNotice(notice_id: number): Promise<Notice | undefined> {
        return await this.createQueryBuilder('notice')
            .select('notice.id')
            .addSelect('notice.title')
            .addSelect('notice.content')
            .addSelect('notice.createdAt')
            .addSelect('notice.updatedAt')
            .addSelect('notice.apt_id')
            .addSelect('apt.name')
            .innerJoin('notice.apt', 'apt')
            .where('notice.id = :notice_id', { notice_id })
            .getOne();
    }

    async findAllNotice(apt_id: number): Promise<Notice | undefined> {
        return await this.createQueryBuilder('notice')
            .select('notice.id')
            .addSelect('notice.title')
            .addSelect('notice.content')
            .addSelect('notice.createdAt')
            .addSelect('notice.updatedAt')
            .addSelect('notice.apt_id')
            .addSelect('apt.name')
            .innerJoin('notice.apt', 'apt')
            .where('notice.apt_id = :apt_id', { apt_id })
            .getOne();
    }
}