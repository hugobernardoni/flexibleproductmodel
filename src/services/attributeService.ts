import { PrismaClient } from '@prisma/client';
import { AttributeDTO } from '../dtos/AttributeDTO';

const prisma = new PrismaClient();

export class AttributeService {
    async createAttribute(data: AttributeDTO) {
        return prisma.attribute.create({
            data: {
                name: data.name,
                dataType: data.dataType,
                customer: { connect: { id: data.customerId } },
            },
        });
    }
    

    async getAllAttributes() {
        return prisma.attribute.findMany();
    }
}
