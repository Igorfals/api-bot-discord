import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddEmojiController } from '../controllers/emoji-controller/add/add-emoji-controller'
import { GetEmojiController } from '../controllers/emoji-controller/get/get-emoji-controller'
import { UpdateEmojiController } from '../controllers/emoji-controller/update/update-emoji-controller'
import { DeleteEmojiController } from '../controllers/emoji-controller/delete/delete-emoji-controller'

const addController = new AddEmojiController()
const getController = new GetEmojiController()
const updateController = new UpdateEmojiController()
const deleteController = new DeleteEmojiController()

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

    async updateEmoji(req: Request, res: Response): Promise<void> {
        const request = {
            id_emoji: req.body.id_emoji,
            titulo: req.body.titulo,
            filename: req.file.filename
        }
        const dados: ControllerResponse = await updateController.updateEmoji(request)
        res.status(dados.statusCode).json(dados.resposta)
    }

    async deleteEmoji(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await deleteController.deleteEmoji(parseInt(req.params.id))
        res.status(dados.statusCode).json(dados.resposta)
    }
}