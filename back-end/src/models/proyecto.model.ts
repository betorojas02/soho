export interface ICrearProyectoRequest{

    name: string
    description: string
}

export interface ICrearProyectoResponse{
    

    error?:any
    result: boolean
}