import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AnimalProvider } from '../../database/providers/animal';



export const getAll = async (req: Request, res: Response) => {

    const result = await AnimalProvider.getAll();
    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: result.message }
        });
    } 

    return res.status(StatusCodes.OK).json(result);
};