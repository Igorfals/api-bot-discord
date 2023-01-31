import { ControllerResponse } from '../../../models/controller'
import { MusicaService } from '../../../db/musica-service'

const musicaService = new MusicaService()

export class DeleteMusicaController {
    async deleteMusica(id: number): Promise<ControllerResponse> {
        try {
            if (isNaN(id)) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Informções invalida'
                    }
                }
            }
            const item = await musicaService.getMusicaID(id)
            await musicaService.deleteMusica(id)
            return {
                statusCode: 200,
                resposta: {
                    mensagem: 'item deletado com sucesso',
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