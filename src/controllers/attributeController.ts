import { Request, Response } from 'express';
import { AttributeService } from '../services/attributeService';

const attributeService = new AttributeService();

export class AttributeController {
    static async create(req: Request, res: Response) {
        try {
            const attribute = await attributeService.createAttribute(req.body);
            res.status(201).json(attribute);
        } catch (error) {
            res.status(500).json({ error: 'Error creating attribute' });
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const attributes = await attributeService.getAllAttributes();
            res.json(attributes);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching attributes' });
        }
    }
}
