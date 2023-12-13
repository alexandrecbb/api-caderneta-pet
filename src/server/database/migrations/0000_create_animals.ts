import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.animals, table => {
            table.bigIncrements('id').primary().index();
            table.string('name', 45).checkLength('<=', 45).index().notNullable();
            table.date('birth').index().notNullable();
            table.enum('gender', ['M', 'F']).index().notNullable();
            table.string('kind', 45).checkLength('<=', 45).index().notNullable();
            table.string('race', 45).checkLength('<=', 45).index().notNullable();
            table.string('hair', 45).checkLength('<=', 45).index().notNullable();

            table.comment('Tabela usada para armazenar animais no sistema');
        })
        .then(() => console.log(`Created table ${ETableNames.animals}`));

}


export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.animals)
        .then(() => console.log(`Dropped table ${ETableNames.animals}`));
}   

