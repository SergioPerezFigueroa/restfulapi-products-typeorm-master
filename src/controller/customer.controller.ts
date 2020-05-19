import {Application} from "express";
import {CustomerService} from "../services/customers.service"

export class CustomerController {

    customer_service: CustomerService;

     constructor(private app: Application){
        this.customer_service = new CustomerService();
        this.routes();
    }
    
    private routes(){

        this.app.route("/customer/:id/factura-summary")
        .get(this.customer_service.getSummary); 

    }

}