import { ControllerResponse } from '../../../models/controller'
import { CategoriaModel } from '../../../models/categoria'
import { CategoriaService } from '../../../db/categoria'

const categoriaService = new CategoriaService()

export class UpdateCategoriaController {
    async updateCategoria(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['id_categoria']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} Não foi encontrado`
                        }
                    }
                }
            }
            const categoriaAdd: CategoriaModel = {
                id_categoria: request.id_categoria,
                nome_categoria: request.nome_categoria
            }
            console.log(categoriaAdd);

            await categoriaService.updateCategoria(categoriaAdd)
            const categoriaResponse = await categoriaService.getCategoriaID(request.id_categoria)
            return {
                statusCode: 200,
                resposta: {
                    categoria: categoriaResponse,
                    mensagem: 'Informações atualizadas com sucesso!!'
                }
            }
        } catch (error: any) {
            console.log(error);

            if (error.errono === 1054) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Um ou mais parametros fornecido é invalidos'
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