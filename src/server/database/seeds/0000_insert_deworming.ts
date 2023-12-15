import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';
import { animalsToInsert } from './0000_insert_animals';


export const seed = async (knex: Knex) => {
    const [{ count }] = await knex(ETableNames.deworming).count<[{ count: number }]>('* as count');
    if (!Number.isInteger(count) || Number(count) > 0) return;



    for (let i = 1; i < animalsToInsert.length + 1; i++) {

        for (let u = 0; u < dewormingToInsert.length; u++) {
            dewormingToInsert[u].animal_id = i;
        }

        await knex(ETableNames.deworming).insert(dewormingToInsert);
    }

};
const dewormingToInsert = [
    {
        'name': 'Drontal Puppy',
        'application': '2023-09-07',
        'reinforcement': '2023-09-14',
        'weight': '1000',
        'animal_id': 1
    },
    {
        'name': 'Drontal Puppy',
        'application': '2023-05-27',
        'reinforcement': '2023-06-27',
        'weight': '1200',
        'animal_id': 1
    },
    {
        'name': 'Vertmax Plus',
        'application': '2023-06-27',
        'reinforcement': '2023-09-30',
        'weight': '1830',
        'animal_id': 1
    },
    {
        'name': 'Vertmax Plus',
        'application': '2023-07-30',
        'reinforcement': '2023-08-30',
        'weight': '2300',
        'animal_id': 1   
    }

];