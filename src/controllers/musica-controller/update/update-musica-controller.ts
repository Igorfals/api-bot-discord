import { MusicaModel } from '../../../models/musica'
import { ControllerResponse } from '../../../models/controller'
import { MusicaService } from '../../../db/musica-service'

const musicaService = new MusicaService()

export class UpdateMusicaController {
    async updateMusica(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['id_musica', 'nome_musica']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} Não foi fornecido!`
                        }
                    }
                }
            }
            const musicaAdd: MusicaModel = {
                id_musica: request.id_musica,
                nome_musica: request.nome_musica,
                artista: request.artista
            }
            await musicaService.updateMusica(musicaAdd)
            const musicaReponse = await musicaService.getMusicaID(request.id_musica)
            return {
                statusCode: 200,
                resposta: {
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
                    mensagem: 'Erro no servidor!!'
                }
            }
        }
    }
}