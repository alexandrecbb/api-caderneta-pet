import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IVaccine } from '../../models';

export const create = async (vaccine: Omit<IVaccine, 'id'>) : Promise<number | Error> => {
   
    try {
        
        const [result] = await Knex(ETableNames.vaccine).insert(vaccine).returning('id');

        if(typeof result === 'object') {
            return result.id;
        }else if (typeof result === 'number') {
            return result;
        }

        return new Error('Error ao cadastrar registro');
         
    } catch (error) {

        console.log(error);
        return Error('Error ao cadastrar registro');

    }
    
};