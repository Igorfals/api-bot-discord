import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddUserController, GetUserController, UpdateUserController, DeleteUserController, UploadUSerController } from '../controllers/user-controller/'

const addcontroller = new AddUserController()
const getcontroller = new GetUserController()
const updatecontroller = new UpdateUserController()
const deletecontroller = new DeleteUserController()
const uploadUserController = new UploadUSerController()

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

    async uploadAvatar(req: Request, res: Response): Promise<void> {
        const request = {
            id_users: req.body.id_users,
            filename: req.file.filename
        }
        const dados: ControllerResponse = await uploadUserController.uploadAvatar(request)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await deletecontroller.deleteUser(parseInt(req.params.id))
        res.status(dados.statusCode).json(dados.resposta)
    }
}