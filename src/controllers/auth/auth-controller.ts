import { ControllerResponse } from '../../models/controller'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

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
            jwt.verify(token, process.env.SALTKEY)
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