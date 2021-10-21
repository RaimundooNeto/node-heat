import { Request, Response } from "express";
import { AuthenticatiUserService } from "../services/AuthenticateUserService";

class AuthenticaUserController {
    async handle(request: Request, response: Response) {

        const { code } = request.body;

        const service = new AuthenticatiUserService();
        try {
            const result = await service.execute(code);
            return response.json(result);
        }catch(err) {
            response.statusCode = 401;
            return response.json({error: err.message});
        }
    }
}

export { AuthenticaUserController };