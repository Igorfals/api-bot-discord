import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('emoji', function (table) {
            table.increments('id_emoji').primary()
            table.string('titulo', 80).nullable()
            table.string('url_arquivo', 300).nullable()
        })
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema
        .dropTable('emoji')
}