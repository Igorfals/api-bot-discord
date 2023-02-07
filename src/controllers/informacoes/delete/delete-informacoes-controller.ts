import { ControllerResponse } from '../../../models/controller'
import { InformacoesService } from '../../../db/informacoes'

const informacoesService = new InformacoesService()

export class DeleteInformacoesController {
    async deleteInformacoes(id: number): Promise<ControllerResponse> {
        try {
            if (isNaN(id)) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Informaçoes invalida!!'
                    }
                }
            }
            const item = await informacoesService.getInformacoesID(id)
            await informacoesService.deleteInformacoes(id)
            return {
                statusCode: 200,
                resposta: {
                    mensagem: 'Item deletado com sucesso!',
                    item
                }
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no sevidor!!'
                }
            }
        }
    }
}