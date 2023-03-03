import { MusicaModel } from '../../../models/musica'
import { MusicaService } from '../../../db/musica-service'
import { ControllerResponse } from '../../../models/controller'

const musicaService = new MusicaService()

export class GetMusicasPlaylistController {
    async getMusicasPlaylist(id: number, request: any): Promise<ControllerResponse> {
        try {
            const musica: MusicaModel[] = await musicaService.getMusicasPlaylist(id, request)
            const musicasTotal: any = await musicaService.getMusicasPlaylistTotal(id, request)
            return {
                statusCode: 200,
                resposta: {
                    musica: musica,
                    total: musicasTotal.total
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