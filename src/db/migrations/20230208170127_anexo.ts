import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('anexo', function (table) {
            table.increments('id').primary()
            table.string('titulo', 80).nullable()
            table.string('url_arquivo', 300).nullable()
            table.integer('users_id', 7).notNullable().unsigned().references('id_users').inTable('users')
        })

}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema
        .dropTable('anexo')
}

