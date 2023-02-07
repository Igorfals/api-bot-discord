import { ControllerResponse } from '../../../models/controller'
import { InformacoesService } from '../../../db/informacoes'
import { InformacoesModel } from '../../../models/informacao'

const informacoesService = new InformacoesService()

export class AddInformacoesController {
    async setInformacoes(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['titulo', 'categoria_id', 'users_id']
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
            const informacoesAdd: InformacoesModel = {
                titulo: request.titulo,
                categoria_id: request.categoria_id,
                users_id: request.users_id,
                descricao: request.descricao
            }
            const informacoes = await informacoesService.setInformacoes(informacoesAdd)
            const informacoesResponse: InformacoesModel = await informacoesService.getInformacoesID(informacoes[0])
            return {
                statusCode: 200,
                resposta: {
                    informacoes: informacoesResponse
                }
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor'
                }
            }
        }
    }
}