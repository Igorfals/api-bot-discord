import { PlaylistModel } from '../../../models/playlist'
import { PlaylistService } from '../../../db/playlist-service'
import { ControllerResponse } from '../../../models/controller'


const playlistService = new PlaylistService()

export class GetPlaylistController {
    async getPlaylist(request: any): Promise<ControllerResponse> {
        try {
            const playlist: PlaylistModel[] = await playlistService.getPlaylist(request)
            const playlistTotal: any = await playlistService.getPlaylistTotal(request)
            return {
                statusCode: 200,
                resposta: {
                    playlist: playlist,
                    total: playlistTotal.total
                }
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no serviço!!'
                }
            }
        }
    }
}