import {Application} from "express";
import {SupplierService} from "../services/suplier.service";

export class SupplierController{
    supplier_service: SupplierService;
    
    constructor(private app: Application){
        this.supplier_service = new SupplierService();
        this.routes();
    }
    private routes(){
        
       /* this.app.route("/supplier/:id/summary")
        .get(this.supplier_service.getOneSummary);

        this.app.route("/supplier")
        .post(this.supplier_service.createOne);

        this.app.route("/supplier/:id")
        .get(this.supplier_service.getOne)
        .put(this.supplier_service.updateOne)
        .delete(this.supplier_service.deleteOne);        
        */

        this.app.route("/suppliers").get(this.supplier_service.getAll);
    }
}