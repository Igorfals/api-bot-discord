import { ControllerResponse } from '../../../models/controller'
import { UserModel } from '../../../models/user'
import { UserService } from '../../../db/user-service'

const userService = new UserService()

export class AddUserController {
    async setUser(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['nome', 'email', 'username', 'password']
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

            const userAdd: UserModel = {
                nome: request.nome,
                email: request.email,
                username: request.username,
                password: request.password
            }

            console.log(userAdd);
            const user = await userService.setUser(userAdd)
            const userReponse: UserModel = await userService.getUserID(user[0])
            return {
                statusCode: 200,
                resposta: {
                    user: userReponse
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