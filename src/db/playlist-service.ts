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
}