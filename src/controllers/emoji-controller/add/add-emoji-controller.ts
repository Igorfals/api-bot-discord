import { ControllerResponse } from '../../../models/controller'
import { EmojiService } from '../../../db/emoji'
import * as dotenv from 'dotenv'

dotenv.config()
const emojiService = new EmojiService()

export class AddEmojiController {
    async setEmoji(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['titulo', 'filename']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} Não foi encontrado`
                        }
                    }
                }
            }
            const emojiAddUpload: any = {
                titulo: request.titulo,
                url_arquivo: `${process.env.BASEURL}uploads/${request.filename}`
            }
            const emoji = await emojiService.setEmoji(emojiAddUpload)
            const emojiResponse = await emojiService.getEmojiID(emoji[0])
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
                    mensagem: 'Erro no servidor!!'
                }
            }
        }
    }
}