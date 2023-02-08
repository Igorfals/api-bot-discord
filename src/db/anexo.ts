import { Knex } from 'knex'
import { AnexoModel } from '../models/anexo'
import { Knexconnection as knex } from './knex-connection'

export class AnexoService {
    setAnexo(obj: any): Knex.QueryBuilder {
        return knex('anexo').insert(obj)
    }

    getAnexoID(id: number): Knex.QueryBuilder<AnexoModel> {
        return knex('anexo')
            .select('anexo.*')
            .andWhere('id', id).first()
    }

    getAnexo(request: any): Knex.QueryBuilder<AnexoModel> {
        return knex('anexo')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('titulo', 'like', `%${request.pequisa}%`)
                }
            })
            .limit(request.limit).offset(request.offset)
    }

    getAnexoTotal(request: any): Knex.QueryBuilder {
        return knex('anexo').count('id as total')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('titulo', 'like', `$${request.pequisa}$`)
                }
            })
            .first()
    }
}