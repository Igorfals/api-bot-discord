import { ControllerResponse } from '../../../models/controller'
import { UserService } from '../../../db/user-service'
import validator from 'validator'
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { geraStringAleatoria } from '../../../helpers/gera-string'
import nodemailer from 'nodemailer'

dotenv.config()
const userService = new UserService()

export class RecSenhaController {
    async recSenha(request: any): Promise<ControllerResponse> {
        try {
            const requredField = ['email']
            for (const field of requredField) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} Não foi encontrado!`
                        }
                    }
                }
            }
            const invalidEmail = validator.isEmail(request.email)
            if (!invalidEmail) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Email invalido!'
                    }
                }
            }
            const users = await userService.getUserEmail(request.email)
            if (!users) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'User não encontrado!'
                    }
                }
            }
            const novaSenha = geraStringAleatoria(8)
            const senhaCripto = await bcrypt.hash(novaSenha.toString(), 8)
            const updateUser = {
                password: senhaCripto,
                id_users: users.id_users
            }
            await userService.updateUser(updateUser)
            const transporter = nodemailer.createTransport({
                host: 'stmp.gmail.com',
                service: 'gmail',
                auth: {
                    user: process.env.USEREMAIL,
                    pass: process.env.PASSWORDEMAIL
                }
            })
            await transporter.sendMail({
                from: 'Recuperação de senha',
                to: request.email,
                subject: 'Email para recuperar senha',
                text: `Sua nova senha é: ${novaSenha}`
            })
            return {
                statusCode: 200,
                resposta: {
                    mensagem: 'Senha alterada com sucesso!!'
                }
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor!'
                }
            }
        }
    }
}