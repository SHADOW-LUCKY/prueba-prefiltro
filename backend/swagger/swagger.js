import swaggerUi from "swagger-ui-express";
import swaggerDocument from './version(1.0.1).json' assert {type: "json"}


const port = process.env.PORT

const swaggerDocs = (app,port)=>{    
    app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument));
    app.get("/api-docs.json",(req,res)=>{
        res.setHeader("Content-Type","application/json");
        res.send(swaggerDocument);
    })

    console.log(`Version 1.0.1 running available at http://localhost:${port}/api-docs.json`);
}

export default swaggerDocs