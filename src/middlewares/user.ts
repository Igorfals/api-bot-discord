import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddUserController, GetUserController, UpdateUserController, DeleteUserController, UploadUSerController } from '../controllers/user-controller/'
import { EnviarEmailController } from '../controllers/user-controller/enviaremail/enviar-email-user-controller'
import { RecSenhaController } from '../controllers/user-controller/rec-senha/rec-senha-controller'

const addcontroller = new AddUserController()
const getcontroller = new GetUserController()
const updatecontroller = new UpdateUserController()
const deletecontroller = new DeleteUserController()
const uploadUserController = new UploadUSerController()
const enviarEmailController = new EnviarEmailController()
const recSenhaController = new RecSenhaController()

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

    async enviarEmail(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await enviarEmailController.enviarEmail(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async recuperarSenha(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await recSenhaController.recSenha(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
}