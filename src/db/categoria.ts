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
}