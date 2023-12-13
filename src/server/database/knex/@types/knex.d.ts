import { IAnimals, IAnimal, IUser } from '../../models';


declare module 'knex/types/tables' {
    interface Tables {
        animals: IAnimals
        animal: IAnimal
        user: IUser
    }
}