import { ControllerResponse } from '../../../models/controller'
import { AnexoService } from '../../../db/anexo'
import * as dotenv from 'dotenv'

dotenv.config()
const anexoService = new AnexoService()

export class AddAnexoController {
    async setAnexo(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['titulo', 'filename', 'users_id']
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
            const anexoAddUpload: any = {
                titulo: request.titulo,
                url_arquivo: `${process.env.BASEURL}upload${request.filename}`,
                users_id: request.users_id
            }
            const anexo = await anexoService.setAnexo(anexoAddUpload)
            console.log(anexo);
            const anexoResponse = await anexoService.getAnexoID(anexo[0])
            return {
                statusCode: 200,
                resposta: {
                    anexo: anexoResponse
                }
            }
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no sevidor!!'
                }
            }
        }
    }
}