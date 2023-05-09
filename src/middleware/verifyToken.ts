import jwt from "jsonwebtoken";
import { BusinessLogic } from "../shared/BusinessLogicInterface";
import { UnAuthorizedError } from "../shared/exception";
import { TokenPayload } from "../shared/TokenPayloadInterface";

export const verifyTokenLogic: BusinessLogic = (req, res, next) => {
        try{
            const token = req.headers["authorization"] as string;
            if(!token) throw new UnAuthorizedError();
            
            const payload: TokenPayload = jwt.verify(
                token.slice(7),
                process.env.JWT_KEY!,
            ) as unknown as TokenPayload;

            (<any>req).decoded = payload;
            next();
        } catch(err) {
            console.error(err);
            throw new UnAuthorizedError();
        }
};