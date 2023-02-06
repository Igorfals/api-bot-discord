import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema
        .createTable('categoria', function (table) {
            table.increments('id_categoria').primary()
            table.string('nome_categoria', 50).notNullable()
        })
        .createTable('informacoes', function (table) {
            table.increments('id_informacoes').primary()
            table.string('titulo', 80).nullable()
            table.text('descricao').nullable()
            table.integer('categoria_id', 7).notNullable().unsigned().references('id_categoria').inTable('categoria')
            table.integer('users_id', 7).notNullable().unsigned().references('id_users').inTable('users')
        })
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema
        .dropTable('informacoes')
        .dropTable('categoria')
}

