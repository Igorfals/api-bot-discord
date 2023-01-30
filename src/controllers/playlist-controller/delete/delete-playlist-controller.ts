import { ControllerResponse } from '../../../models/controller'
import { PlaylistService } from '../../../db/playlist-service'

const playlistService = new PlaylistService()

export class DeletePlaylistController {
    async deletePlaylist(id: number): Promise<ControllerResponse> {
        try {
            if (isNaN(id)) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Informações ionvalida!'
                    }
                }
            }
            const item = await playlistService.getPlaylistID(id)
            await playlistService.deletePlaylist(id)
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