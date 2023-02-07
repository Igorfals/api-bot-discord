import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema
        .alterTable('users', function (table) {
            table.string('avatar', 300).nullable()
        })
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema
        .alterTable('users', function (table) {
            table.dropColumn('avatar')
        })
}

