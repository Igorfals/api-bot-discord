import { Knex } from 'knex'
import { UserModel } from '../models/user'
import { Knexconnection as knex } from './knex-connection'

export class UserService {
    setUser(obj: any): Knex.QueryBuilder {
        return knex('users').insert(obj)
    }

    getUserID(id: number): Knex.QueryBuilder<UserModel> {
        return knex('users')
            .select('users.*')
            .andWhere('id_users', id).first()
    }

    getUser(request: any): Knex.QueryBuilder<UserModel> {
        return knex('users')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('nome', 'like', `%${request.pesquisa}%`)
                }
            })
            .limit(request.limit).offset(request.offset)
    }

    getUserTotal(request: any): Knex.QueryBuilder {
        return knex('users').count('id_users as total')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('nome', 'like', `%${request.pequisa}%`)
                }
            })
            .first()
    }

    updateUser(obj: any): Knex.QueryBuilder {
        return knex('users').update(obj).where('id_users', obj.id_users)
    }

    deleteUser(id: number): any {
        return knex.transaction(async function (trx) {
            await trx('users').where('id_users', id).del()
        })
    }

    getUserEmail(email: string): Knex.QueryBuilder<UserModel> {
        return knex('users').where('email', email).first()
    }
}