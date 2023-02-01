import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddUserController } from '../controllers/user-controller/add/add-user-controller'
import { GetUserController } from '../controllers/user-controller/get/get-user-controller'
import { UpdateUserController } from '../controllers/user-controller/update/update-user-controller'

const addcontroller = new AddUserController()
const getcontroller = new GetUserController()
const updatecontroller = new UpdateUserController()

export class UserMiddleWare {
    async setUser(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setUser(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async getUser(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getcontroller.getUser(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async updateUser(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await updatecontroller.updateUser(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
}