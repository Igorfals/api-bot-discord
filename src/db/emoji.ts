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
}