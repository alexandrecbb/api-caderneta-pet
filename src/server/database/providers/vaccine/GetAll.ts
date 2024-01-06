import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';


export const getAll = async () => {
    try {
        const result = await Knex(ETableNames.animal)
            .select('*')
            .from('animal');

        return result;
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros');
    }
};