import { ControllerResponse } from '../../../models/controller'
import { CategoriaService } from '../../../db/categoria'

const categoriaService = new CategoriaService()

export class DeleteCategoriaController {
    async deleteCategoria(id: number): Promise<ControllerResponse> {
        try {
            if (isNaN(id)) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Informações invalida!'
                    }
                }
            }
            const item = await categoriaService.getCategoriaID(id)
            await categoriaService.deleteCategoria(id)
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