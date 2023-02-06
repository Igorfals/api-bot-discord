import { NextFunction, Request, Response } from 'express'
import { ControllerResponse } from '../models/controller'
import { LoginController } from '../controllers/auth/login-controller'
import { AuthController } from '../controllers/auth/auth-controller'

const loginController = new LoginController()
const authController = new AuthController()

export class AuthMiddleWare {
    async login(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await loginController.login(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    authorize(req: Request, res: Response, next: NextFunction) {
        const dados: ControllerResponse = authController.authorize(req.headers.token)
        if (dados.statusCode === 200) {
            next()
        } else {
            res.status(dados.statusCode).json(dados.resposta)
        }
    }
}