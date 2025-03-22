import express from 'express';
import { ProductController } from '../controllers/productController';


const router = express.Router();

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     description: Creates a product with custom attributes for a specific customer.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sku:
 *                 type: string
 *               name:
 *                 type: string
 *               customerId:
 *                 type: string
 *               attributes:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     key:
 *                       type: string
 *                     value:
 *                       type: string
 *     responses:
 *       201:
 *         description: Product created successfully
 */
router.post('/', ProductController.create);

/**
 * @swagger
 * /products/customer/{customerId}:
 *   get:
 *     summary: Get all products for a specific customer
 *     description: Retrieves all products that belong to a given customer.
 *     parameters:
 *       - in: path
 *         name: customerId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of products
 */
router.get('/customer/:customerId', ProductController.getByCustomer);

/**
 * @swagger
 * /products/search:
 *   post:
 *     summary: Search for products using dynamic filters
 *     description: Allows searching for products by custom attributes dynamically.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               filters:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     key:
 *                       type: string
 *                     value:
 *                       type: string
 *     responses:
 *       200:
 *         description: List of filtered products
 */
router.post('/search', ProductController.search);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get product by ID
 *     description: Fetches details of a specific product, including custom attributes.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product details
 */
router.get('/:id', ProductController.getProductById);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     description: Retrieves all products, including custom attributes.
 *     responses:
 *       200:
 *         description: List of products
 */
router.get('/', ProductController.getAll);

export default router;
