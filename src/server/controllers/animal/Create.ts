import * as yup from 'yup';

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { AnimalProvider } from '../../database/providers/animal';
import { validation } from '../../shared/middleware';
import { IAnimal } from '../../database/models/Animal';

interface IBodyProps extends Omit<IAnimal, 'id'> {}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3).max(45), 
        birth: yup.string().required(),
        gender: yup.string().required().min(1).max(1),
        kind: yup.string().required().min(3).max(45),
        race: yup.string().required().min(3).max(45),
        hair: yup.string().required().min(3).max(45),            
    })),
    
}));

export const create = async (req: Request<{}, {}, IAnimal>, res: Response) => {

    const result = await AnimalProvider.create(req.body);

    if(result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
            { errors: { 
                default: result.message } 
            }
        );
    }

    return res.status(StatusCodes.CREATED).json(result);

};