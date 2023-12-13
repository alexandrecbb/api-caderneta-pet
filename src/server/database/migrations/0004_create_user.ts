import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
    return knex
        .schema
        .createTable(ETableNames.user, table => {
            table.bigIncrements('id').primary().index();
            table.string('name').notNullable().checkLength('>=', 3);
            table.string('password').notNullable().checkLength('>=', 6);
            table.string('email').index().unique().notNullable().checkLength('>=', 5);

            table.comment('Tabela usada para armazenar usuários do sistema');
        })
        .then(() => console.log(`Created table ${ETableNames.user}`));

}


export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable(ETableNames.user)
        .then(() => console.log(`Dropped table ${ETableNames.user}`));
}   

