import { PrismaClient } from '@prisma/client';
import { CustomerDTO } from '../dtos/CustomerDTO';

const prisma = new PrismaClient();

export class CustomerService {
    async createCustomer(data: CustomerDTO) {
        return prisma.customer.create({ data });
    }

    async getAllCustomers() {
        return prisma.customer.findMany();
    }
}
