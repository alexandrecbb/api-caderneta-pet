import { ETableNames } from '../../ETableNames';
import { IAnimal } from '../../models';
import { Knex } from '../../knex';


export const updateById = async (id: number, animal: Omit<IAnimal, 'id'>): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.animal)
            .update(animal)
            .where('id', '=', id);

        if (result > 0) return;

        return new Error('Erro ao atualizar o registro');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao atualizar o registro');
    }
};