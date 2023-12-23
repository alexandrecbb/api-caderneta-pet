import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';
import { animalsToInsert } from './0000_insert_animals';


export const seed = async (knex: Knex) => {
    const [{ count }] = await knex(ETableNames.ectoparasiticide).count<[{ count: number }]>('* as count');
    if (!Number.isInteger(count) || Number(count) > 0) return;



    for (let i = 1; i < animalsToInsert.length + 1; i++) {

        for (let u = 0; u < ectoparasiticideToInsert.length; u++) {
            ectoparasiticideToInsert[u].animal_id = i;
        }

        await knex(ETableNames.ectoparasiticide).insert(ectoparasiticideToInsert);
    }

};
const ectoparasiticideToInsert = [
    {
        'name': 'Coleira Scalibor',
        'application': '2023-08-07',
        'reinforcement': '2023-12-07',
        'weight': '2600',
        'animal_id': 1,
    },
    {
        'name': 'Coleira Scalibor',
        'application': '2023-12-07',
        'reinforcement': '2024-04-07',
        'weight': '3200',
        'animal_id': 1,
    }
];