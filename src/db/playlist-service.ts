import { Knex } from 'knex'
import { PlaylistModel } from '../models/playlist'
import { Knexconnection as knex } from './knex-connection'

export class PlaylistService {
    setPlaylist(obj: any): Knex.QueryBuilder {
        return knex('playlist').insert(obj)
    }
    getPlaylistID(id: number): Knex.QueryBuilder<PlaylistModel> {
        return knex('playlist')
            .select('playlist.*')
            .andWhere('id_playlist', id).first()
    }
    getPlaylist(request: any): Knex.QueryBuilder<PlaylistModel> {
        return knex('playlist')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('nome_playlist', 'Like', `%${request.pequisa}%`)
                }
            })
            .limit(request.limit).offset(request.offset)
    }
    getPlaylistTotal(request: any): Knex.QueryBuilder {
        return knex('playlist').count('id_playlist as total')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('nome_play', 'Like', `%${request.pesquisa}%`)
                }
            })
            .first()
    }
    updatePlaylist(obj: any): Knex.QueryBuilder {
        return knex('playlist').update(obj).where('id_playlist', obj.id_playlist)
    }
}