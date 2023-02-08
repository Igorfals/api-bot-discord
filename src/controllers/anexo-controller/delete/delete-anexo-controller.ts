import { ControllerResponse } from '../../../models/controller'
import { AnexoService } from '../../../db/anexo'

const anexoService = new AnexoService()

export class DeleteAnexoController {
    async deleteAnexo(id: number): Promise<ControllerResponse> {
        try {
            if (isNaN(id)) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Informações invalidas!'
                    }
                }
            }
            const item = await anexoService.getAnexoID(id)
            await anexoService.deleteAnexo(id)
            return {
                statusCode: 200,
                resposta: {
                    mensagem: 'Item deletado com sucesso!!',
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