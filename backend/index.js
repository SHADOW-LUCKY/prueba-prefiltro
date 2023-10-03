import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import toppingsRoutes from './src/routes/toppings.routes.js';
import quesosRoutes from './src/routes/quesos.routes.js';
import swaggerDocs from './swagger/swagger.js';
dotenv.config();

const app = express();

app.use(cors());
app.use (express.json());


app.use ('/toppings',toppingsRoutes);
app.use ('/quesos',quesosRoutes);

const port = process.env.PORT 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  swaggerDocs(app,port); 
})



