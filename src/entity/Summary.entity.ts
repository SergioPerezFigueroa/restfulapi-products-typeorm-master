import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity({schema:"example", database:"Ingreso_vehiculos", name:"fact_summary"})
export class fact_summary{



    @Column()
    CustomerID :    number;

    @Column()
    CustomerName:   String;  
   
    @Column()
    SupplierID :    number ; 

    @Column()
    SupplierName :   String; 

    @Column()
    mes:    number; 

    @Column()
    year: number; 

    @Column()
    total : number ; 

    @Column()
    SuperoPromedio : number ; 

    @Column()
    ProcentajeVentaMensual : number ; 


}


