# Flexible Product Model

This project provides a flexible product modeling system using Node.js, TypeScript, Express, and PostgreSQL. The database schema allows different customers to define custom attributes for their products without modifying the core code.


## Prerequisites
Ensure you have Docker and Docker Compose installed on your system.

## Running the Project with Docker
1. Clone the repository:
   ```sh
   git clone https://github.com/hugobernardoni/flexibleproductmodel.git
   cd flexible-product-model
   ```
2. Start the application using Docker Compose:
   ```sh
   docker compose up -d --build
   ```
3. The API will be available at `http://localhost:3000`.

4. Open the documentation at `http://localhost:3000/api-docs/`. 


## Stopping the Application
To stop and remove the containers, run:
```sh
docker compose down
```

