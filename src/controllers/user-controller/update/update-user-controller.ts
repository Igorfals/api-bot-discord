import { ControllerResponse } from '../../../models/controller'
import { UserModel } from '../../../models/user'
import { UserService } from '../../../db/user-service'
import isEmail from 'validator/lib/isEmail'

const userService = new UserService()

export class UpdateUserController {
    async updateUser(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['id_users']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 200,
                        resposta: {
                            mensagem: `${field} Não foi fornecido`
                        }
                    }
                }
            }
            if (request.email) {
                const emailValido = isEmail(request.email)
                if (!emailValido) {
                    return {
                        statusCode: 200,
                        resposta: {
                            mensagem: 'Email invalido!'
                        }
                    }
                }
            }
            const userAdd: UserModel = {
                id_users: request.id_users,
                nome: request.nome,
                email: request.email,
                username: request.username,
                password: request.password,
                status_user: request.status_user
            }
            await userService.updateUser(userAdd)
            const userResponse = await userService.getUserID(request.id_users)
            return {
                statusCode: 200,
                resposta: {
                    user: userResponse,
                    mensagem: 'Informações atualizadas com sucesso!'
                }
            }
        } catch (error: any) {
            console.log(error);
            if (error.errno === 1062) {
                if (error.sqlMessage.includes('users.users_email_unique')) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: 'Email já está em uso!'
                        }
                    }
                }
                if (error.sqlMessage.includes('users.users_username_unique')) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: 'Username já está em uso!'
                        }
                    }
                }
            }
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor!!'
                }
            }
        }
    }
}