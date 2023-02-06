import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema
        .createTable('users', function (table) {
            table.increments('id_users').primary()
            table.string('nome', 150).notNullable()
            table.string('email', 255).notNullable().unique()
            table.string('username', 100).notNullable().unique()
            table.string('password', 255).notNullable()
            table.integer('status_user', 1).defaultTo(1).notNullable().unsigned()
        })
}
export async function down(knex: Knex): Promise<void> {
    return await knex.schema
        .dropTable('users')
}