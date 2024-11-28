const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { swaggerUi, swaggerSpec } = require('./swagger');
require('dotenv').config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
  console.log(`Swagger API documentation is on http://localhost:${port}/api-docs`);
});
