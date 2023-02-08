import { ControllerResponse } from '../../../models/controller'
import { AnexoService } from '../../../db/anexo'
import * as dotenv from 'dotenv'

dotenv.config()
const anexoService = new AnexoService()

export class UpdateAnexoController {
    async updateAnexo(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['id', 'titulo', 'filename', 'users_id']
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
            const updateAdd: any = {
                id: request.id,
                titulo: request.titulo,
                url_arquivo: `${process.env.BASEURL}uploads${request.filename}`,
                users_id: request.users_id
            }
            await anexoService.updateAnexo(updateAdd)
            const anexoResponse = await anexoService.getAnexoID(request.id)
            return {
                statusCode: 200,
                resposta: {
                    anexo: anexoResponse,
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