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

    public getById = async (request: Request, response: Response) => {
        const { id } = request.params;
        const user = await this.service.getById(Number(id));
        if (!user) {
            return response.status(404).json({ message: 'User not found'});
        }
        return response.status(200).json(user);
    }

    public create = async (request: Request, response: Response) => {
        const user = request.body;
        const userCreated = await this.service.create(user);
        return response.status(201).json(userCreated);
    }
}

export default UserController;