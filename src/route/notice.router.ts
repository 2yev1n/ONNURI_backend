import { Router } from "express";
import { NoticeController } from "../controller/notice.controller";
import { verifyTokenLogic } from "../middleware/verifyToken";
import { errorHandler } from "../middleware/errorHandler";

const router: Router = Router();
export const NoticeServiceRouter = (app: Router) => {
    const noticeController: NoticeController = new NoticeController();

    app.use('/apt', router);

    router.post('/:apt_id/notice', verifyTokenLogic, errorHandler(noticeController.createNotice));
    router.delete('/:apt_id/notice/:notice_id', verifyTokenLogic, errorHandler(noticeController.deleteNotice));
    router.get('/:apt_id/notice', verifyTokenLogic, errorHandler(noticeController.findAllNotice));
}