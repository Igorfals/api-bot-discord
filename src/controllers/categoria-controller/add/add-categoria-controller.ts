import { ControllerResponse } from '../../../models/controller'
import { CategoriaModel } from '../../../models/categoria'
import { CategoriaService } from '../../../db/categoria'

const categoriaService = new CategoriaService()

export class AddCategoriaController {
    async setCategoria(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['nome_categoria']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 200,
                        resposta: {
                            mensagem: `${field} Não foi encontrado`
                        }
                    }
                }
            }
            const categoriaAdd: CategoriaModel = {
                nome_categoria: request.nome_categoria
            }
            const categoria = await categoriaService.setCategoria(categoriaAdd)
            const categoriaResponse: CategoriaModel = await categoriaService.getCategoriaID(categoria[0])
            return {
                statusCode: 200,
                resposta: {
                    categoria: categoriaResponse
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