import * as yup from 'yup';

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';
import { IVaccine } from '../../database/models';
import { VaccineProvider } from '../../database/providers/vaccine';

interface IBodyProps extends Omit<IVaccine, 'id'> {}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().required().min(3).max(45), 
        application: yup.string().required(),
        reinforcement: yup.string().required(),
        responsible: yup.string().required().min(3).max(100),
        animal_id: yup.number().required().integer().moreThan(0),       
    })),
    
}));

export const create = async (req: Request<{}, {}, IVaccine>, res: Response) => {

    const result = await VaccineProvider.create(req.body);

    if(result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
            { errors: { 
                default: result.message } 
            }
        );
    }

    return res.status(StatusCodes.CREATED).json(result);

};