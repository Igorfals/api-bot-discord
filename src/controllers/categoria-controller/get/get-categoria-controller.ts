import { ControllerResponse } from '../../../models/controller'
import { CategoriaModel } from '../../../models/categoria'
import { CategoriaService } from '../../../db/categoria'


const categoriaService = new CategoriaService()


export class GetCategoriaController {
    async getCategoria(request: any): Promise<ControllerResponse> {
        try {
            const categoria: CategoriaModel = await categoriaService.getCategoria(request)
            const categoriaTotal: any = await categoriaService.getCategoriaTotal(request)
            return {
                statusCode: 200,
                resposta: {
                    categoria: categoria,
                    total: categoriaTotal.total
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