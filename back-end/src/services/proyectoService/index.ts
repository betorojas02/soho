import { Proyecto } from "../../entity/Proyecto";
import { ICrearProyectoRequest, ICrearProyectoResponse } from "../../models/proyecto.model";

  export interface IProyectoService {
    createProyecto(
      payload: ICrearProyectoRequest
    ): Promise<ICrearProyectoResponse>

    getProyectos(): Promise<Proyecto[]>
  }
  