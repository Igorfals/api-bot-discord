import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddUserController } from '../controllers/user-controller/add/add-user-controller'

const addcontroller = new AddUserController()

export class UserMiddleWare {
    async setUser(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setUser(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
}