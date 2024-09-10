import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/create-user.dto";

export function getUsers(req: Request, res: Response) {
    res.send([])
}

export function getUserById(req: Request, res: Response) {
    res.send({})

}

export function createUser(req: CreateUserDto, res: Response) {
    const body = req.body;
    const query = req.query;
    const params = req.params;

    req.isAuthenticated

    res.status(200).send({});
}