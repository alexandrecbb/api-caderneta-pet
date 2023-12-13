import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.vaccines, table => {
            table.bigIncrements('id').primary().index();
            table.string('name', 45).checkLength('<=', 45).index().notNullable();
            table.date('application').index().notNullable();
            table.date('reinforcement').index().notNullable();
            table.string('responsible', 100).checkLength('<=', 100).index().notNullable();
            table
                .bigInteger('animals_id')
                .index()
                .notNullable()
                .references('id').inTable(ETableNames.animals)
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');

            table.comment('Tabela usada para armazenar vacinações no sistema');
        })
        .then(() => console.log(`Created table ${ETableNames.vaccines}`));

}


export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.vaccines)
        .then(() => console.log(`Dropped table ${ETableNames.vaccines}`));
}   

