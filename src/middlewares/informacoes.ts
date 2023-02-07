import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddInformacoesController } from '../controllers/informacoes/add/add-informacoes-controller'

const addController = new AddInformacoesController()

export class InformacoesMiddleWare {
    async setInformacoes(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addController.setInformacoes(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
}