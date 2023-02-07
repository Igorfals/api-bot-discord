import { ControllerResponse } from '../../../models/controller'
import { UserService } from '../../../db/user-service'
import { UserModel } from '../../../models/user'
import * as dotenv from 'dotenv'

dotenv.config()
const userService = new UserService()

export class UploadUSerController {
    async uploadAvatar(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['id_users']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} Não foi fornecido!`
                        }
                    }
                }
            }
            const upload: any = {
                id_users: request.id_users,
                avatar: `${process.env.BASEURL}uploads/${request.filename}`
            }
            await userService.updateUser(upload)
            const userResponse = await userService.getUserID(upload.id_users)
            return {
                statusCode: 200,
                resposta: {
                    user: userResponse
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