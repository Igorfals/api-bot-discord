import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema
        .createTable('playlist', function (table) {
            table.increments('id_playlist').primary()
            table.string('nome_playlist', 50).notNullable()
        })
        .createTable('musicas', function (table) {
            table.increments('id_musica').primary()
            table.string('nome_musica', 50).notNullable()
            table.string('artista', 100).nullable()
            table.string('url', 250).nullable()
            table.string('album', 60).nullable()
            table.integer('playlist_id', 5).notNullable().unsigned().references('id_playlist').inTable('playlist')
        })
}


export async function down(knex: Knex): Promise<void> {
}

