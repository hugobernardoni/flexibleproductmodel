import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const customer1 = await prisma.customer.create({
        data: { name: 'Fresh Produce Co.' }
    });

    const customer2 = await prisma.customer.create({
        data: { name: 'Tech Innovations Ltd.' }
    });

    const colorAttribute = await prisma.attribute.create({
        data: {
            name: 'color',
            dataType: 'string',
            customerId: customer1.id
        }
    });

    const sizeAttribute = await prisma.attribute.create({
        data: {
            name: 'size',
            dataType: 'string',
            customerId: customer1.id
        }
    });

    const weightAttribute = await prisma.attribute.create({
        data: {
            name: 'weight',
            dataType: 'number',
            customerId: customer1.id
        }
    });

    const batteryAttribute = await prisma.attribute.create({
        data: {
            name: 'battery_life',
            dataType: 'number',
            customerId: customer2.id
        }
    });

    const screenSizeAttribute = await prisma.attribute.create({
        data: {
            name: 'screen_size',
            dataType: 'string',
            customerId: customer2.id
        }
    });

    const apple = await prisma.product.create({
        data: {
            sku: 'FP-123',
            name: 'Apple',
            customerId: customer1.id,
            attributes: {
                create: [
                    { attributeId: colorAttribute.id, value: 'red' },
                    { attributeId: sizeAttribute.id, value: 'medium' },
                    { attributeId: weightAttribute.id, value: '200' }
                ]
            }
        }
    });

    const banana = await prisma.product.create({
        data: {
            sku: 'FP-456',
            name: 'Banana',
            customerId: customer1.id,
            attributes: {
                create: [
                    { attributeId: colorAttribute.id, value: 'yellow' },
                    { attributeId: sizeAttribute.id, value: 'large' },
                    { attributeId: weightAttribute.id, value: '150' }
                ]
            }
        }
    });

    const smartphone = await prisma.product.create({
        data: {
            sku: 'TI-789',
            name: 'Smartphone X',
            customerId: customer2.id,
            attributes: {
                create: [
                    { attributeId: batteryAttribute.id, value: '24' },
                    { attributeId: screenSizeAttribute.id, value: '6.1 inches' }
                ]
            }
        }
    });

    const laptop = await prisma.product.create({
        data: {
            sku: 'TI-101',
            name: 'Laptop Pro',
            customerId: customer2.id,
            attributes: {
                create: [
                    { attributeId: batteryAttribute.id, value: '10' },
                    { attributeId: screenSizeAttribute.id, value: '15.6 inches' }
                ]
            }
        }
    });
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
