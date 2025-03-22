import express from 'express';
import { CustomerController } from '../controllers/customerController';

const router = express.Router();

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a new customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created successfully
 */
router.post('/', CustomerController.create);

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all customers
 *     responses:
 *       200:
 *         description: List of customers
 */
router.get('/', CustomerController.getAll);

export default router;
