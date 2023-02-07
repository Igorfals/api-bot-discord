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

    getInformacoes(request: any): Knex.QueryBuilder<InformacoesModel> {
        return knex('informacoes')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('titulo', 'like', `%${request.pequisa}%`)
                }
            })
            .limit(request.limit).offset(request.offset)
    }

    getInformacoesTotal(request: any): Knex.QueryBuilder<InformacoesModel> {
        return knex('informacoes').count('id_informacoes as total')
            .andWhere(function () {
                if (request.pequisa) {
                    this.where('titulo', 'like', `%${request.pequisa}%`)
                }
            })
            .first()
    }

    updateInformacoes(obj: any): Knex.QueryBuilder {
        return knex('informacoes').update(obj).where('id_informacoes', obj.id_informacoes)
    }

    deleteInformacoes(id: number): any {
        return knex.transaction(async function (trx) {
            await trx('informacoes').where('id_informacoes', id).del()
        })
    }
}