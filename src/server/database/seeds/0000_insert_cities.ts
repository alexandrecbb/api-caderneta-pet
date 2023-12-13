import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export const seed = async (knex: Knex) => {
    const [{ count }] = await knex(ETableNames.animals).count<[{ count: number }]>('* as count');
    if (!Number.isInteger(count) || Number(count) > 0) return;

    await knex(ETableNames.animals).insert(animalsToInsert);
};
const animalsToInsert = [
    {
        'name': 'Floki',
        'birth': '2023-03-05',
        'gender': 'M',
        'kind': 'Cão',
        'race': 'Splitz Alemão',
        'hair': 'Black and Tan'
    },
    {
        'name': 'Capitú',
        'birth': '2021-11-17',
        'gender': 'F',
        'kind': 'Canis lupus familiaris',
        'race': 'Pastor Alemão',
        'hair': 'Capa preta '
    },
    {
        'name': 'Babalu',
        'birth': '2022-11-16',
        'gender': 'F',
        'kind': 'Canis lupus familiaris',
        'race': 'Fila Brasileiro',
        'hair': 'Preta'
    },
    {
        'name': 'Juju',
        'birth': '2020-10-08',
        'gender': 'F',
        'kind': 'Canis lupus familiaris',
        'race': 'Pinscher',
        'hair': 'Black and Tan'
    },
    {
        'name': 'Tete',
        'birth': '2023-07-12',
        'gender': 'M',
        'kind': 'Canis lupus familiaris',
        'race': 'Pinscher',
        'hair': 'Black and Tan'
    },
    {
        'name': 'Jubileu',
        'birth': '2022-03-22',
        'gender': 'M',
        'kind': 'Canis lupus familiaris',
        'race': 'Splitz Alemão',
        'hair': 'Branca'
    }
];