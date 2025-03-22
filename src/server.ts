import express from 'express';
import productRoutes from './routes/productRoutes';
import { setupSwagger } from './swagger';
import attributeRoutes from './routes/attributeRoutes';
import customerRoutes from './routes/customerRoutes';

const app = express();
app.use(express.json());

setupSwagger(app); 

app.use('/products', productRoutes);
app.use('/customers', customerRoutes);
app.use('/attributes', attributeRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    console.log('Swagger: http://localhost:3000/api-docs');
});
