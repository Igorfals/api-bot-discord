import { Knex } from 'knex'
import { MusicaModel } from '../models/musica'
import { Knexconnection as knex } from './knex-connection'

export class MusicaService {
    setMusica(obj: any): Knex.QueryBuilder {
        return knex('musicas').insert(obj)
    }
    getMusicaID(id: number): Knex.QueryBuilder<MusicaModel> {
        return knex('musicas')
            .select('musicas.*')
            .andWhere('id_musica', id).first()
    }
    getMusica(request: any): Knex.QueryBuilder<MusicaModel> {
        return knex('musicas')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('nome_musica', 'like', `%${request.pequisa}%`)
                }
            })
            .limit(request.limit).offset(request.offset)
    }
    getMusicaTotal(request: any): Knex.QueryBuilder {
        return knex('musicas').count('id_musica as total')
            .andWhere(function () {
                if (request.pequisa) {
                    this.where('nome_play_musica', 'like', `%${request.pequisa}%`)
                }
            })
            .first()
    }
}