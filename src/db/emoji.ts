import { Knex } from 'knex'
import { EmojiModel } from '../models/emoji'
import { Knexconnection as knex } from './knex-connection'

export class EmojiService {
    setEmoji(obj: any): Knex.QueryBuilder {
        return knex('emoji').insert(obj)
    }

    getEmojiID(id: number): Knex.QueryBuilder<EmojiModel> {
        return knex('emoji')
            .select('emoji.*')
            .andWhere('id_emoji', id).first()
    }

    getEmoji(request: any): Knex.QueryBuilder<EmojiModel> {
        return knex('emoji')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('titulo', 'like', `%${request.pequisa}%`)
                }
            })
            .limit(request.limit).offset(request.offset)
    }

    getEmojiTotal(request: any): Knex.QueryBuilder<EmojiModel> {
        return knex('emoji').count('id_emoji as total')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('titulo', 'like', `%${request.pesquisa}%`)
                }
            })
            .first()
    }
}