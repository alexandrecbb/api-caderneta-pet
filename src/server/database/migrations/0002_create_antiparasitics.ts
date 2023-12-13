import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.antiparasitics, table => {
            table.bigIncrements('id').primary().index();
            table.string('name', 45).checkLength('<=', 45).index().notNullable();
            table.date('application').index().notNullable();
            table.date('reinforcement').index().notNullable();
            table.decimal('weight', 5, 2).index().notNullable();
            table
                .bigInteger('animals_id')
                .index()
                .notNullable()
                .references('id').inTable(ETableNames.animals)
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');

            table.comment('Tabela usada para armazenar antiparasitários no sistema');
        })
        .then(() => console.log(`Created table ${ETableNames.antiparasitics}`));

}


export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.antiparasitics)
        .then(() => console.log(`Dropped table ${ETableNames.antiparasitics}`));
}   

