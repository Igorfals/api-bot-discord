import { ControllerResponse } from '../../../models/controller'
import nodemailer from 'nodemailer'
import validator from 'validator'
import * as dotenv from 'dotenv'

dotenv.config()

export class EnviarEmailController {
    async enviarEmail(request: any): Promise<ControllerResponse> {
        try {
            const requredField = ['email', 'assunto', 'text']
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
            const emailIsvalid = validator.isEmail(request.email)
            if (!emailIsvalid) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Email invalido!'
                    }
                }
            }
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                service: 'gmail',
                auth: {
                    user: process.env.USEREMAIL,
                    pass: process.env.PASSWORDEMAIL
                },
            })
            const info = await transporter.sendMail({
                from: `Recuperação de senha`,
                to: request.email,
                subject: request.assunto,
                text: request.text,
            })
            return {
                statusCode: 200,
                resposta: {
                    mensagem: 'Email enviado com sucesso!!',
                    info
                }
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Não foi possivel enviar email!!'
                }
            }
        }
    }
}