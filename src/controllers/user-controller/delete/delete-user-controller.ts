import { ControllerResponse } from '../../../models/controller'
import { UserService } from '../../../db/user-service'

const userService = new UserService()

export class DeleteUserController {
    async deleteUser(id: number): Promise<ControllerResponse> {
        try {
            if (isNaN(id)) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Informações invalida'
                    }
                }
            }
            const item = await userService.getUserID(id)
            await userService.deleteUser(id)
            return {
                statusCode: 200,
                resposta: {
                    mensagem: 'Deletado com sucesso!!',
                    item
                }
            }
        } catch (error) {
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor!!'
                }
            }
        }
    }
}