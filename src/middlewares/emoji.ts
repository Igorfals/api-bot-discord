import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddEmojiController } from '../controllers/emoji-controller/add/add-emoji-controller'

const addController = new AddEmojiController()

export class EmojiMiddleWare {
    async setEmoji(req: Request, res: Response): Promise<void> {
        const request = {
            titulo: req.body.titulo,
            filename: req.file.filename
        }
        const dados: ControllerResponse = await addController.setEmoji(request)
        res.status(dados.statusCode).json(dados.resposta)

    }
}