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
}