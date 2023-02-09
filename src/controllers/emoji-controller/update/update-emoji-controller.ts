import { ControllerResponse } from '../../../models/controller'
import { EmojiService } from '../../../db/emoji'
import * as dotenv from 'dotenv'

dotenv.config()
const emojiService = new EmojiService()

export class UpdateEmojiController {
    async updateEmoji(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['id_emoji', 'titulo', 'filename']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} Não foi encontrado!`
                        }
                    }
                }
            }
            const updateUpload: any = {
                id_emoji: request.id_emoji,
                titulo: request.titulo,
                url_arquivo: `${process.env.BASERUL}uploads/${request.filename}`
            }
            await emojiService.updateEmoji(updateUpload)
            const emojiResponse = await emojiService.getEmojiID(request.id_emoji)
            return {
                statusCode: 200,
                resposta: {
                    emoji: emojiResponse
                }
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor!'
                }
            }
        }
    }
}