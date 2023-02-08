import { ControllerResponse } from '../../../models/controller'
import { AnexoModel } from '../../../models/anexo'
import { AnexoService } from '../../../db/anexo'

const anexoService = new AnexoService()

export class GetAnexoController {
    async getAnexo(request: any): Promise<ControllerResponse> {
        try {
            const anexo: AnexoModel[] = await anexoService.getAnexo(request)
            const anexoTotal: any = await anexoService.getAnexoTotal(request)
            return {
                statusCode: 200,
                resposta: {
                    anexo: anexo,
                    total: anexoTotal.total
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