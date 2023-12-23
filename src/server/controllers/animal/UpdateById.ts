import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';

import { AnimalProvider } from '../../database/providers/animal';


interface IParamProps {
    id?: number;
}
interface IBodyProps {
    name?: string;
    birth?: string;
    gender?: string;
    kind?: string;
    race?: string;
    hair?: string;
}
export const updateByIdValidation = validation(getSchema => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        name: yup.string().optional().min(3).max(45), 
        birth: yup.string().optional(),
        gender: yup.string().optional().min(3).max(45),
        kind: yup.string().optional().min(3).max(45),
        race: yup.string().optional().min(3).max(45),
        hair: yup.string().optional().min(3).max(45),            
    })),
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {

    if (!req.params.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado.'
            }
        });
    }

    const result = await AnimalProvider.updateById(req.params.id, req.body);
    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.NO_CONTENT).json(result);
};