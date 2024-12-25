const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'DFS System API',
      version: '1.0.0',
      description: 'API Documentation for DFS System',
    },
    servers: [
      {
        url: 'http://localhost:3030', // Replace with your server URL
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        tokenAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'authorization',
        },
      },
    },
  };
  
  const options = {
    swaggerDefinition,
    apis: ["./routes/*.js"], // Path to the API routes
  };
const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;