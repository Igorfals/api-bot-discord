import { ControllerResponse } from '../../../models/controller'
import { PlaylistService } from '../../../db/playlist-service'
import { PlaylistModel } from '../../../models/playlist'

const playlistService = new PlaylistService()

export class AddPlaylistController {
    async setPlaylist(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['nome_playlist']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} Não foi fornecido`
                        }
                    }
                }
            }
            const playlistAdd: PlaylistModel = {
                nome_playlist: request.nome_playlist
            }
            const playlist = await playlistService.setPlaylist(playlistAdd)
            const playlistResponse: PlaylistModel = await playlistService.getPlaylistID(playlist[0])
            return {
                statusCode: 200,
                resposta: {
                    playlist: playlistResponse
                }
            }
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor'
                }
            }

        }
    }
}