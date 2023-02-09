import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddEmojiController } from '../controllers/emoji-controller/add/add-emoji-controller'
import { GetEmojiController } from '../controllers/emoji-controller/get/get-emoji-controller'

const addController = new AddEmojiController()
const getController = new GetEmojiController()

export class EmojiMiddleWare {
    async setEmoji(req: Request, res: Response): Promise<void> {
        const request = {
            titulo: req.body.titulo,
            filename: req.file.filename
        }
        const dados: ControllerResponse = await addController.setEmoji(request)
        res.status(dados.statusCode).json(dados.resposta)

    }

    async getEmoji(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getController.getEmoji(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }
}