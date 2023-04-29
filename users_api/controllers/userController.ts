import express, { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
    public service: UserService;

    constructor() {
       this.service = new UserService();
    }

    public getAll = async (_request: Request, response: Response) => {
        const users = await this.service.getAll();
        return response.status(200).json(users);
    }

    public create = async (request: Request, response: Response) => {
        const user = request.body;
        const userCreated = await this.service.create(user);
        return response.status(201).json(userCreated);
    }
}

export default UserController;