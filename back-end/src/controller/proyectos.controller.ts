import { controller, httpGet, interfaces, request, response, next, httpPost } from "inversify-express-utils";
import * as express from "express";
import { TYPES } from "../config/ioc/types";
import { inject } from "inversify";
import { IProyectoService } from "../services/proyectoService";
import { BaseController } from "../commods/controller/baseController";
import { ICrearProyectoRequest } from "../models/proyecto.model";
@controller('/proyectos')
export class ProyectosController extends BaseController implements interfaces.Controller {



    constructor(
        @inject(TYPES.IProyectoService)
        private proyectoService: IProyectoService
    ) {
        super();
    }

    @httpGet("/")
    public async get(@request() req: express.Request, @response() res: express.Response, @next() next: express.NextFunction) {
        try {
           
            const proyectos = await this.proyectoService.getProyectos()

             res.status(200).json(proyectos);
        } catch (err) {
        
            this.handleException(err, res);
        }



    }
    @httpPost("/")
    public async index(@request() req: express.Request, @response() res: express.Response, @next() next: express.NextFunction) {
        try {
            const proyecto = req.body as ICrearProyectoRequest;
            await this.proyectoService.createProyecto(proyecto)

             res.status(201).json(req.body);
        } catch (err) {
        
            this.handleException(err, res);
        }



    }
}