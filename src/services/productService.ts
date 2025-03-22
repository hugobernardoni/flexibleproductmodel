import { PrismaClient } from '@prisma/client';
import { ProductDTO } from '../dtos/ProductDTO';

const prisma = new PrismaClient();

export class ProductService {
    async createProduct(data: ProductDTO) {
        const customerExists = await prisma.customer.findUnique({
            where: { id: data.customerId }
        });

        if (!customerExists) {
            throw { status: 400, message: 'Customer not found' };
        }

        const attributeIds = data.attributes.map(attr => attr.attributeId);
        const existingAttributes = await prisma.attribute.findMany({
            where: { id: { in: attributeIds } }
        });

        if (existingAttributes.length !== attributeIds.length) {
            throw { status: 400, message: 'Some attributes do not exist' };
        }

        const skuExists = await prisma.product.findFirst({
            where: { sku: data.sku, customerId: data.customerId }
        });

        if (skuExists) {
            throw { status: 400, message: 'A product with this SKU already exists for this customer' };
        }

        return prisma.product.create({
            data: {
                sku: data.sku,
                name: data.name,
                customerId: data.customerId,
                attributes: {
                    create: data.attributes.map(attr => ({
                        attribute: { connect: { id: attr.attributeId } },
                        value: attr.value
                    }))
                }
            },
            include: { attributes: { include: { attribute: true } } },
        });
    }

    async getProductsByCustomer(customerId: string) {
        return prisma.product.findMany({
            where: { customerId },
            include: { attributes: { include: { attribute: true } } },
        });
    }

    async getProductById(id: string) {
        return prisma.product.findUnique({
            where: { id },
            include: { attributes: { include: { attribute: true } } },
        });
    }

    async search(filters: { key: string; value: string }[]) {
        return prisma.product.findMany({
            where: {
                attributes: {
                    some: {
                        OR: filters.map(filter => ({
                            attribute: { name: filter.key },
                            value: filter.value
                        }))
                    }
                }
            },
            include: { attributes: { include: { attribute: true } } }
        });
    }

    async getAllProducts() {
        return prisma.product.findMany({
            include: { attributes: { include: { attribute: true } } }
        });
    }
}
