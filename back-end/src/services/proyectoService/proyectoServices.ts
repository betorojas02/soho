import { provide } from "inversify-binding-decorators";
import { IProyectoService } from ".";
import { ApplicationException } from "../../commods/exceptions/aplication.excetion";
import { TYPES } from "../../config/ioc/types";
import { Proyecto } from "../../entity/Proyecto";
import { ICrearProyectoRequest, ICrearProyectoResponse } from "../../models/proyecto.model";

@provide(TYPES.IProyectoService)
export class ProyectoService implements IProyectoService {

    async createProyecto(payload: ICrearProyectoRequest): Promise<ICrearProyectoResponse> {

        let resultado: ICrearProyectoResponse = {
            result: false,
        }

        try {
            const proyecto = new Proyecto();

            proyecto.name = payload.name;
            proyecto.description = payload.description;
            await proyecto.save();
            resultado.result = true;
        } catch (err) {
            throw new ApplicationException(err.message);
        }






        return resultado;

    }


    async getProyectos() : Promise<Proyecto[]>{

        try {
            return  await Proyecto.find()
        } catch (err) {
            throw new ApplicationException(err.message);
        }

        
    }


}