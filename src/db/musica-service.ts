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
}