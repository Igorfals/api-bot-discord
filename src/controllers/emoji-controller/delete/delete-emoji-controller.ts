import { ControllerResponse } from '../../../models/controller'
import { EmojiService } from '../../../db/emoji'

const emojiService = new EmojiService()

export class DeleteEmojiController {
    async deleteEmoji(id: number): Promise<ControllerResponse> {
        try {
            if (isNaN(id)) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Informações invalidas!'
                    }
                }
            }
            const item = await emojiService.getEmojiID(id)
            await emojiService.deleteEmoji(id)
            return {
                statusCode: 200,
                resposta: {
                    mensagem: 'Item deletado com sucesso!!',
                    item
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