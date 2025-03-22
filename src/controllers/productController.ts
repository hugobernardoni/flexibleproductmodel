import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

const productService = new ProductService();

export class ProductController {
    static async create(req: Request, res: Response) {
        try {
            const { sku, name, customerId, attributes } = req.body;

            if (!sku || !name || !customerId || !Array.isArray(attributes)) {
                res.status(400).json({ error: 'Missing required fields' });
                return;
            }

            const product = await productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error: any) {
            console.error(error);
            res.status(error.status || 500).json({ error: error.message || 'Error creating product' });
        }
    }

    static async getByCustomer(req: Request, res: Response) {
        try {
            const { customerId } = req.params;
            if (!customerId) {
                res.status(400).json({ error: 'Customer ID is required' });
                return;
            }

            const products = await productService.getProductsByCustomer(customerId);
            res.json(products);
        } catch (error: any) {
            console.error(error);
            res.status(error.status || 500).json({ error: error.message || 'Error retrieving products' });
        }
    }

    static async search(req: Request, res: Response) {
        try {
            const { filters } = req.body;
            if (!Array.isArray(filters) || filters.length === 0) {
                res.status(400).json({ error: 'Filters must be a non-empty array' });
                return;
            }

            const products = await productService.search(filters);
            res.json(products);
        } catch (error: any) {
            console.error(error);
            res.status(error.status || 500).json({ error: error.message || 'Internal server error' });
        }
    }

    static async getProductById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({ error: 'Product ID is required' });
                return;
            }

            const product = await productService.getProductById(id);
            if (!product) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }

            res.json(product);
        } catch (error: any) {
            console.error(error);
            res.status(error.status || 500).json({ error: error.message || 'Internal server error' });
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        } catch (error: any) {
            console.error(error);
            res.status(error.status || 500).json({ error: error.message || 'Internal server error' });
        }
    }
}
