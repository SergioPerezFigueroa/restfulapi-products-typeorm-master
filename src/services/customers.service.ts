import {Request, Response} from "express";
import {getConnection} from "typeorm";
import { MessagePort } from "worker_threads";
import {VIEW_Summary_factura} from "../entity/Summary_factura.entity"; 
import {fact_summary} from "../entity/Summary.entity" ; 


export class CustomerService{

    public  async getSummary(req: Request, res: Response){
        const factura: VIEW_Summary_factura[] = await getConnection().getRepository(VIEW_Summary_factura).find({ where :{CustomerID: req.params.id } }); 
        res.status(200).json(factura);
    }

   
}
