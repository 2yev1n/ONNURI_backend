import jwt from "jsonwebtoken";
import { BusinessLogic } from "../shared/BusinessLogicInterface";
import { ForbiddenError, UnAuthorizedError } from "../shared/exception";
import { TokenPayload } from "../shared/TokenPayloadInterface";

export const verifyTokenLogic: BusinessLogic = (req, res, next) => {
        try{
            const token = req.headers["authorization"] as string;
            const apt_id = +req.params.apt_id;

            if(!token) throw new UnAuthorizedError();
            
            const payload: TokenPayload = jwt.verify(
                token.slice(7),
                process.env.JWT_KEY!,
            ) as unknown as TokenPayload;

            if(apt_id) {
                if(apt_id !== payload.apt_id) throw new ForbiddenError();
            }

            (<any>req).decoded = payload;
            next();
        } catch(err) {
            console.log(err);
            throw err;
        }
};