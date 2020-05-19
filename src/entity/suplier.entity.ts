import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"example", database:"Ingreso_vehiculos", name:"Suppliers"})
export class Supplie{
   @PrimaryColumn()
    SupplierID :    number;

    @Column()
    SupplierName:   String;  

    @Column ()
    ContactName:    String;
    
    @Column()
    Address:        String;
    
    @Column()         
    City:           String;
    
    @Column()
    PostalCode:     String;
    
    @Column()
    Country:        String;
    
    @Column()
    Phone:          String;
}


export interface ISupplier{    
    SupplierID: number;
    SupplierName: string;
    ContactName:    String;
    Address: string;
    City: string;
    PostalCode: string;
    Country: string;
    Phone: string;
}

//manda el mensaje de encontro el resultado 
export interface IResult{
    Successed: boolean;
    MSG: string
}
