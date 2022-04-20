import { Response } from "express";
import { injectable } from "inversify";
import { ApplicationException } from "../exceptions/aplication.excetion";
@injectable()
export abstract class BaseController {


    handleException(error: any , res: Response) {

        if(error instanceof ApplicationException){
        
            res.status(500).json({error:error.message })
          
        }else{
            throw new Error(error);
        }
    }
}