const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const router = require('./src/food_delivery/router');

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Mount the router under the /app route
app.use('/app', router);

// Swagger configuration
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Food Delivery API',
            version: '1.0.0',
            description: 'API documentation for Food Delivery application',
        },
    },
    apis: ['./src/food_delivery/router.js'], // Path to your router file
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
