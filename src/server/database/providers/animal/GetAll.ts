import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';


export const getAll = async () => {
    try {
        const result = await Knex(ETableNames.animals)
            .select('*')
            .from('animals');

        return result;
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');
    }
};