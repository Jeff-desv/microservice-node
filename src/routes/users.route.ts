
import { StatusCodes } from 'http-status-codes';
import { Router, Request, Response, NextFunction } from "express";

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Renan' }];
    res.status(StatusCodes.OK).send({ users });
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.sendStatus(200).send({ uuid });
});

usersRoute.post('/users/', (req: Request, res: Response, next: NextFunction) => {
    
    const newUser = req.body;

    console.log(req.body);
    res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.send(StatusCodes.OK).send({ uuid });

});

usersRoute.delete('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;

