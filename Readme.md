# Flexible Product Model

This project provides a flexible product modeling system using Node.js, TypeScript, Express, and PostgreSQL. The database schema allows different customers to define custom attributes for their products without modifying the core code.

## Features
- Multi-tenant product and attribute management
- Dynamic attribute creation per customer
- PostgreSQL with Prisma ORM
- Dockerized setup for easy deployment

## Prerequisites
Ensure you have Docker and Docker Compose installed on your system.

## Running the Project with Docker
1. Clone the repository:
   ```sh
   git clone https://github.com/hugobernardoni/flexible-product-model.git
   cd flexible-product-model
   ```
2. Start the application using Docker Compose:
   ```sh
   docker compose up -d --build
   ```
3. The API will be available at `http://localhost:3000`.

## API Endpoints
- `GET /products` - List all products
- `POST /products` - Create a new product
- `GET /products/:id` - Get details of a specific product
- `GET /attributes` - List all attributes
- `POST /attributes` - Create a new attribute

## Database Migration and Seeding
The migrations and seed data are automatically applied when the container starts. If needed, you can manually apply them:
```sh
docker compose exec app npx prisma migrate deploy
docker compose exec app npm run seed
```

## Stopping the Application
To stop and remove the containers, run:
```sh
docker compose down
```

