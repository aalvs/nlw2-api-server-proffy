import knex from 'knex';

export async function up(knex: knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    });
}

export async function down(knex: knex) {
    return knex.schema.dropTable('connections');
}

