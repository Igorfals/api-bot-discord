import { ControllerResponse } from '../../../models/controller'
import { UserModel } from '../../../models/user'
import { UserService } from '../../../db/user-service'
import isEmail from 'validator/lib/isEmail'
import bcrypt from 'bcrypt'

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
            const emailvalido = isEmail(request.email)
            if (!emailvalido) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Email Invalido!!'
                    }
                }
            }
            const passwordHash = bcrypt.hashSync(request.password, 8);
            const userAdd: UserModel = {
                nome: request.nome,
                email: request.email,
                username: request.username,
                password: passwordHash
            }
            const user = await userService.setUser(userAdd)
            const userReponse: UserModel = await userService.getUserID(user[0])
            return {
                statusCode: 200,
                resposta: {
                    user: userReponse
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
                            mensagem: 'Username já está em uso'
                        }
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