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
}

export default UserController;