import {Request, Response} from 'express'
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';


export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {
    try {
        const user = await createUser(req.body)
        return user
    } catch (e: any) {
        console.warn(e);
        return res.status(409).send(e.message)
    }
}