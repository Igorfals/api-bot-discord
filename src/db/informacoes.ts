import { Knex } from 'knex'
import { InformacoesModel } from '../models/informacao'
import { Knexconnection as knex } from './knex-connection'

export class InformacoesService {
    setInformacoes(obj: any): Knex.QueryBuilder {
        return knex('informacoes').insert(obj)
    }

    getInformacoesID(id: number): Knex.QueryBuilder<InformacoesModel> {
        return knex('informacoes')
            .select('informacoes.*')
            .andWhere('id_informacoes', id).first()
    }
}