import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.deworming, table => {
            table.bigIncrements('id').primary().index();
            table.string('name', 45).checkLength('<=', 45).index().notNullable();
            table.date('application').index().notNullable();
            table.date('reinforcement').index().notNullable();
            table.decimal('weight', 5, 2).index().notNullable();
            table
                .bigInteger('animal_id')
                .index()
                .notNullable()
                .references('id').inTable(ETableNames.animal)
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');

            table.comment('Tabela usada para armazenar vermifogos no sistema');
        })
        .then(() => console.log(`Created table ${ETableNames.deworming}`));

}


export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.deworming)
        .then(() => console.log(`Dropped table ${ETableNames.deworming}`));
}   

