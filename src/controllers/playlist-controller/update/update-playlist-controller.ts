import { PlaylistModel } from '../../../models/playlist'
import { ControllerResponse } from '../../../models/controller'
import { PlaylistService } from '../../../db/playlist-service'

const playlistService = new PlaylistService()

export class UpdatePlaylistController {
    async updatePlaylist(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['id_playlist']
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
                id_playlist: request.id_playlist,
                nome_playlist: request.nome_playlist
            }
            await playlistService.updatePlaylist(playlistAdd)
            const playlistResponse = await playlistService.getPlaylistID(request.id_playlist)
            return {
                statusCode: 200,
                resposta: {
                    playlist: playlistResponse,
                    mensagem: 'Informações atualizadas com sucesso!'
                }
            }
        } catch (error: any) {
            if (error.errono === 1054) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Um ou mais paramentos fornecidos é invalidos!'
                    }
                }
            }
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Error no servidor!!'
                }
            }
        }
    }
}