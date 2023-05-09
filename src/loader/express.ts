import fs from "fs";
import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { NotFoundURLError } from "../shared/exception";
import { OnnuriRouter } from "../route/index.router";

const PORT = process.env.PORT || 3000;

export const loadExpress = (app: Application) => {
    app.set('port', PORT);

    app.use(morgan('dev'));

    app.use((req: Request, res: Response, next: NextFunction) => {
        express.json()(req, res, next);
    });

    app.use((req: Request, res: Response, next: NextFunction) => {
        express.urlencoded({ extended: false })(req, res, next)
    });

    const CorsOption = {
        origin: '*',
        method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
		credentials: true,
	};

    app.use(cors(CorsOption));

    app.use('/', OnnuriRouter());

    app.use((req: Request, res: Response, next: NextFunction) => {
        next(new NotFoundURLError(req.url));
    });

    app.listen(app.get('port'), () => {
        console.log(PORT, "포트에서 대기 중");
    });
}