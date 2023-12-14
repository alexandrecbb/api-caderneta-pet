import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';
import { animalsToInsert } from '../seeds/0000_insert_animals';


export const seed = async (knex: Knex) => {
    const [{ count }] = await knex(ETableNames.vaccines).count<[{ count: number }]>('* as count');
    if (!Number.isInteger(count) || Number(count) > 0) return;



    for (let i = 1; i < animalsToInsert.length; i++) {

        for (let u = 0; u < vaccines.length; u++) {
            vaccines[u].animal_id = i;
        }

        await knex(ETableNames.vaccines).insert(vaccines);
    }
    
};
const vaccines = [
    {
        'name': 'Nobivac Dhpp+L',
        'application': '2023-04-20',
        'reinforcement': '2023-05-11',
        'responsible': 'Dra. Renta E. Coelho',
        'animal_id': 1
    },
    {
        'name': 'Nobivac Dhpp+L',
        'application': '2023-05-11',
        'reinforcement': '2023-06-03',
        'responsible': 'Dra. Renta E. Coelho',
        'animal_id': 1
    },
    {
        'name': 'Nobivac Dhpp+L',
        'reinforcement': '2023-07-03',
        'application': '2023-05-11',
        'responsible': 'Dra. Renta E. Coelho',  
        'animal_id': 1
    },
    {
        'name': 'Antirrábica',
        'application': '2023-09-07',
        'reinforcement': '2023-09-22',
        'responsible': 'Maria da Dores',   
        'animal_id': 1
    },
    {
        'name': 'Giárdias',
        'application': '2023-09-07',
        'reinforcement': '2023-09-22',
        'responsible': 'Maria da Dores',  
        'animal_id': 1
    },
];