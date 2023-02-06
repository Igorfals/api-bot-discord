import { ControllerResponse } from '../../models/controller'
import { UserService } from '../../db/user-service'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userService = new UserService()


export class LoginController {
    async login(request: any): Promise<ControllerResponse> {
        try {
            const user = await userService.login(request.email)
            if (typeof user === 'undefined') {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Email ou senha invalido!'
                    }
                }
            }
            const senhaValida = await bcrypt.compare(request.password, user.password)
            if (!senhaValida) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Email ou senha invalido!'
                    }
                }
            }
            const userResponse = {
                nome: user.nome,
                email: user.email,
                username: user.username
            }
            const token = jwt.sign(userResponse, 'shhhhh');
            return {
                statusCode: 200,
                resposta: {
                    user: userResponse,
                    token
                }
            }
        } catch (error) {
            console.log(error)
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor!!'
                }
            }
        }
    }
}
