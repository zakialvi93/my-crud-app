const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require("dotenv").config();
const port = process.env.PORT;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CRUD API',
      version: '1.0.0',
      description: 'CRUD operations with authentication',
    },
    components: {
      securitySchemes: {
        jwt: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        jwt: [],
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your route files
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
