/* librerias */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
/* routes */
import toppingsRoutes from './src/routes/toppings.routes.js';
import quesosRoutes from './src/routes/quesos.routes.js';
import salsasRoutes from './src/routes/salsas.routes.js';
import bordesRoutes from './src/routes/bordes.routes.js';
/* swagger */
import swaggerDocs from './swagger/swagger.js';
/* configuracion */
dotenv.config();

const app = express();

app.use(cors());
app.use (express.json());

/* Routes */
app.use ('/toppings',toppingsRoutes);
app.use ('/quesos',quesosRoutes);
app.use ('/salsas',salsasRoutes);
app.use ('/bordes',bordesRoutes);


const port = process.env.PORT 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  swaggerDocs(app,port); 
})




