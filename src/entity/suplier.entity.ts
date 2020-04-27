import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"example", database:"Ingreso_vehiculos", name:"Suppliers"})
export class Supplier{
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

/*
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

export interface IResult{
    Successed: boolean;
    MSG: string
}
*/