import { ControllerResponse } from '../../../models/controller'
import { EmojiModel } from '../../../models/emoji'
import { EmojiService } from '../../../db/emoji'

const emojiService = new EmojiService()

export class GetEmojiController {
    async getEmoji(request: any): Promise<ControllerResponse> {
        try {
            const emoji: EmojiModel = await emojiService.getEmoji(request)
            const emojiTotal: any = await emojiService.getEmojiTotal(request)
            return {
                statusCode: 200,
                resposta: {
                    emoji: emoji,
                    total: emojiTotal.total
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