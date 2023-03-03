import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema
        .alterTable('musicas', function (table) {
            table.integer('users_id', 7).notNullable().unsigned().references('id_users').inTable('users')
        })

}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema
        .alterTable('musicas', function (table) {
            table.dropColumn('users_id')
        })
}