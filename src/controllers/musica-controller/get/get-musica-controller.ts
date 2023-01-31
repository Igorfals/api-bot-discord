import { MusicaModel } from '../../../models/musica'
import { MusicaService } from '../../../db/musica-service'
import { ControllerResponse } from '../../../models/controller'

const musicaService = new MusicaService()

export class GetMusicaController {
    async getMusica(request: any): Promise<ControllerResponse> {
        try {
            const musica: MusicaModel[] = await musicaService.getMusica(request)
            const musicaTotal: any = await musicaService.getMusicaTotal(request)
            return {
                statusCode: 200,
                resposta: {
                    musica: musica,
                    total: musicaTotal.total
                }
            }
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor!!'
                }
            }
        }
    }
}