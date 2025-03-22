import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

const productService = new ProductService();

export class ProductController {
    static async create(req: Request, res: Response) {
        try {
            const product = await productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating product' });
        }
    }

    static async getByCustomer(req: Request, res: Response) {
        try {
            const { customerId } = req.params;
            const products = await productService.getProductsByCustomer(customerId);
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving products' });
        }
    }
    
    static async search(req: Request, res: Response) {
        try {
            const { filters } = req.body;
            const products = await productService.search(filters); 
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getProductById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const product = await productService.getProductById(id);
            if (!product) res.status(404).json({ message: 'Product not found' });
    
            res.json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getAll(req: Request, res: Response) { 
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
