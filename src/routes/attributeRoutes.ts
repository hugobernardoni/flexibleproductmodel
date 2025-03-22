import express from 'express';
import { AttributeController } from '../controllers/attributeController';

const router = express.Router();

/**
 * @swagger
 * /attributes:
 *   post:
 *     summary: Create a new attribute
 *     description: Creates an attribute for a specific customer.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               dataType:
 *                 type: string
 *               customerId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Attribute created successfully
 */
router.post('/', AttributeController.create);

/**
 * @swagger
 * /attributes:
 *   get:
 *     summary: Get all attributes
 *     description: Retrieves all attributes.
 *     responses:
 *       200:
 *         description: List of attributes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   dataType:
 *                     type: string
 *                   customerId:
 *                     type: string
 */
router.get('/', AttributeController.getAll);

export default router;
