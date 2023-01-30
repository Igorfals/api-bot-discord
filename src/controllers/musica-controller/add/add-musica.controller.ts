import { ControllerResponse } from '../../../models/controller'
import { MusicaService } from '../../../db/musica-service'
import { MusicaModel } from '../../../models/musica'

const musicaService = new MusicaService()

export class AddMusicaController {
    async setMusica(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['nome_musica', 'artista', 'album']
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
            const musicaAdd: MusicaModel = {
                nome_musica: request.nome_musica,
                artista: request.artista,
                album: request.album,
                playlist_id: request.playlist_id
            }
            const musica = await musicaService.setMusica(musicaAdd)
            const musicaReponse: MusicaModel = await musicaService.getMusicaID(musica[0])
            return {
                statusCode: 200,
                resposta: {
                    musica: musicaReponse
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