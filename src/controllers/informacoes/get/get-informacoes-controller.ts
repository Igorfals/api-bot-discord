import { InformacoesModel } from '../../../models/informacao'
import { InformacoesService } from '../../../db/informacoes'
import { ControllerResponse } from '../../../models/controller'

const informacoesService = new InformacoesService()

export class GetIndormacoesController {
    async getInformacoes(request: any): Promise<ControllerResponse> {
        try {
            const informacoes: InformacoesModel[] = await informacoesService.getInformacoes(request)
            const InformacoesTotal: any = await informacoesService.getInformacoesTotal(request)
            return {
                statusCode: 200,
                resposta: {
                    informacoes: informacoes,
                    total: InformacoesTotal.total
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