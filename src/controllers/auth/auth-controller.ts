import { ControllerResponse } from '../../models/controller'
import jwt from 'jsonwebtoken'

export class AuthController {
    authorize(token: any): ControllerResponse {
        try {
            if (!token) {
                return {
                    statusCode: 401,
                    resposta: {
                        mensagem: 'Acesso negado 1'
                    }
                }
            }
            jwt.verify(token, 'shhhhh')
            return {
                statusCode: 200,
                resposta: {
                    mensagem: 'Liberar acesso!'
                }
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: 401,
                resposta: {
                    mensagem: 'Acesso negado!!'
                }
            }
        }
    }
}