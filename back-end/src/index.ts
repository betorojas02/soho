
import 'reflect-metadata'
import express from "express";
import cors  from "cors";
import helmet  from "helmet";
// Importar dependencias de Express y de Inversify
import bodyParser from 'body-parser'
import { CONFIG } from "./config";
import { InversifyExpressServer } from 'inversify-express-utils'
import { container } from './config/ioc/inversify.config'
import { TYPES } from './config/ioc/types'


// Cargar las entidades inyectables
// la anotación @provide() las registra automaticamente
import './config/ioc/loader'
import { AppDataSource } from './data-source';



const server = new InversifyExpressServer(container, null, {
  rootPath: '' ,
})
async function main() {
  try {

    await AppDataSource.initialize()
    .then(() => {
      console.log(`BASE DE DATOS CORRIENDO`)
    })
    .catch((error) => console.log(error))
   
  } catch (error) {
    console.error(error);
  }
}


server.setConfig(expressApp => {
  expressApp.use(bodyParser.json())
  expressApp.use(helmet())
  expressApp.use(cors())

})
const app = server.build()
// const app = express();
// En las versiones superiores de express no es necesario usar
// body-parser, en su lugar se usa esto
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Libreria para solucionar los problemas de cors
// app.use(
//   cors({
//     origin: ["http://localhost:4200", "*"],
//   })
// );

// // Libreria con algunos middlewares de seguridad
// app.use(
//   helmet()
// );




// Usamos las rutas configuradas


// Capturador de errores global

main();

app.listen(CONFIG.port, () => {
    console.log((`HTTP server started at http://localhost:${CONFIG.port}`))
});






export = module.exports = app;