import { InformacoesModel } from '../../../models/informacao'
import { InformacoesService } from '../../../db/informacoes'
import { ControllerResponse } from '../../../models/controller'

const informacoesService = new InformacoesService()

export class UpdateInformacoesController {
    async updateInformacoes(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['id_informacoes', 'categoria_id', 'users_id']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} Não foi encontrado!!`
                        }
                    }
                }
            }
            const informacoesAdd: InformacoesModel = {
                titulo: request.titulo,
                descricao: request.descricao,
                id_informacoes: request.id_informacoes,
                categoria_id: request.categoria_id,
                users_id: request.users_id
            }
            await informacoesService.updateInformacoes(informacoesAdd)
            const informacoesResponse = await informacoesService.getInformacoesID(request.id_informacoes)
            return {
                statusCode: 200,
                resposta: {
                    informacoes: informacoesResponse,
                    mensagem: 'Informações atualizadas com sucesso!'
                }
            }
        } catch (error: any) {
            console.log(error);
            if (error.errono === 1054) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Um ou mais parametros fornecido é invalido!'
                    }
                }
            }
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor'
                }
            }
        }
    }
}