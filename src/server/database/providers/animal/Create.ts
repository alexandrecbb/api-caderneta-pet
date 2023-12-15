import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IAnimal } from '../../models';

export const create = async (animal: Omit<IAnimal, 'id'>) : Promise<number | Error> => {
   
    try {
        
        const [result] = await Knex(ETableNames.animals).insert(animal).returning('id');

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