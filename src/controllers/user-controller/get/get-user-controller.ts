import { ControllerResponse } from '../../../models/controller'
import { UserService } from '../../../db/user-service'
import { UserModel } from '../../../models/user'

const userservice = new UserService()

export class GetUserController {
    async getUser(request: any): Promise<ControllerResponse> {
        try {
            const user: UserModel[] = await userservice.getUser(request)
            const userTotal: any = await userservice.getUserTotal(request)
            return {
                statusCode: 200,
                resposta: {
                    user: user,
                    total: userTotal.total
                }
            }
        } catch (error) {
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor!'
                }
            }
        }
    }
}