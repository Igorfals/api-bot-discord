import { Knex } from 'knex'
import { CategoriaModel } from '../models/categoria'
import { Knexconnection as knex } from './knex-connection'


export class CategoriaService {
    setCategoria(obj: any): Knex.QueryBuilder {
        return knex('categoria').insert(obj)
    }
    getCategoriaID(id: number): Knex.QueryBuilder<CategoriaModel> {
        return knex('categoria')
            .select('categoria.*')
            .andWhere('id_categoria', id).first()
    }
    getCategoria(request: any): Knex.QueryBuilder<CategoriaModel> {
        return knex('categoria')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('nome_categoria', 'like', `%${request.pequisa}%`)
                }
            })
            .limit(request.limit).offset(request.offset)
    }
    getCategoriaTotal(request: any): Knex.QueryBuilder {
        return knex('categoria').count('id_categoria as total')
            .andWhere(function () {
                if (request.pequisa) {
                    this.where('nome_categoria', 'like', `%${request.pequisa}%`)
                }
            })
            .first()
    }
}