import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Supplie ,ISupplier,IResult} from "../entity/suplier.entity";
import { MessagePort } from "worker_threads";
import {ViewSuppliersByNProducts} from "../entity/supplierbynproducts.entity";

export class SupplierService{

    public async getAll(req: Request, res: Response){
        const suppliers = await getConnection().getRepository(Supplie).find();
        res.status(200).json(suppliers);
    }

    //video 15
    public async getOne(req: Request ,  res: Response){
        const supplier :Supplie[] = await getConnection().getRepository(Supplie).find({ where :{SupplierID: req.params.id } }); 
        res.status(200).json(supplier[0]);
    }

    //VIDEO  16 
    public async getOneSummary(req: Request, res: Response){
        const supplier :ViewSuppliersByNProducts[] = await getConnection().getRepository(ViewSuppliersByNProducts).find({ where :{SupplierID: req.params.id } }); 
        res.status(200).json(supplier[0]);
    }

    public async updateOne(req:Request, res: Response){
        try{

            await getConnection().createQueryBuilder().update(Supplie)
            .set({
                SupplierName: req.body.SupplierName,
                ContactName:req.body.ContactName, 
                Address: req.body.Address,
                City: req.body.City,
                PostalCode: req.body.PostalCode,
                Country: req.body.Country,
                Phone: req.body.Phone
            })
            .where("SupplierID = :id",{id: req.params.id})
            .execute();

            res.status(200).json({
                updated: true
            });


        }catch(Error){
            res.status(401).json({
                updated: false,
                Message: Error.Message
            });
    
       }

       
       
    }
    public async CreateOne(req:Request, res:Response){
        const s: ISupplier = req.body;
        const result: IResult[] = await getConnection().query(`EXEC example.SP_CREATE_SUPPLIER 
        @SupplierID = ${s.SupplierID},
        @SupplierName = '${s.SupplierName}',
        @ContactNAme = '${s.ContactName}',
        @Address = '${s.Address}',
        @City = '${s.City}',
        @PostalCode = '${s.PostalCode}',
        @Country = '${s.Country}',
        @Phone = '${s.Phone}'`);
        res.status(201).json(result[0])

    }
    

    public async DeleteOne(req:Request,res:Response){

        const s: ISupplier= req.body
        const result: IResult[] = await getConnection().query(`EXEC example.SP_DELETE_SUPPLIER 
        @SupplierID = ${s.SupplierID},
        @SupplierName = '${s.SupplierName}',
        @Address = '${s.Address}',
        @City = '${s.City}',
        @PostalCode = '${s.PostalCode}',
        @Country = '${s.Country}',
        @Phone = '${s.Phone}'`);
        res.status(201).json(result[0]);

    }

    
}


    
 