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
                    this.where('nome_musica', 'like', `%${request.pequisa}%`)
                }
            })
            .first()
    }

    getMusicasPlaylist(id: number, request: any): Knex.QueryBuilder {
        return knex('musicas')
            .join('users', 'musicas.users_id', '=', 'users.id_users')
            .join('playlist', 'musicas.playlist_id', '=', 'playlist.id_playlist')
            .select('musicas.*', 'users.nome', 'playlist.nome_playlist')
            .where('playlist_id', id)
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('nome_musica', 'like', `%${request.pesquisa}%`)
                        .orWhere('artista', 'like', `%${request.pesquisa}%`)
                }
            })
            .limit(request.limit).offset(request.offset)
    }

    getMusicasPlaylistTotal(id: number, request: any): Knex.QueryBuilder {
        return knex('musicas').count('id_musica as total')
            .join('users', 'musicas.users_id', '=', 'users.id_users')
            .join('playlist', 'musicas.playlist_id', '=', 'playlist.id_playlist')
            .where('playlist_id', id).first()
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('nome_musica', 'like', `%${request.pesquisa}%`)
                    this.orWhere('artista', 'like', `%${request.pesquisa}%`)
                }
            })
    }



    updateMusica(obj: any): Knex.QueryBuilder {
        return knex('musicas').update(obj).where('id_musica', obj.id_musica)
    }

    deleteMusica(id: number): any {
        return knex.transaction(async function (trx) {
            await trx('musicas').where('id_musica', id).del()
        })
    }
}