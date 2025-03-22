import { Request, Response } from 'express';
import { CustomerService } from '../services/customerService';

const customerService = new CustomerService();

export class CustomerController {
    static async create(req: Request, res: Response) {
        try {
            const customer = await customerService.createCustomer(req.body);
            res.status(201).json(customer);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating customer' });
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const customers = await customerService.getAllCustomers();
            res.json(customers);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving customers' });
        }
    }
}
