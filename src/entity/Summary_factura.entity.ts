import {ViewEntity, ViewColumn} from "typeorm";


@ViewEntity({schema:"example", database:"Ingreso_vehiculos", name:"VIEW_Summary_factura"})

export class VIEW_Summary_factura{
    
    @ViewColumn()
    CustomerID : number ; 

    @ViewColumn()
    CustomerName : String ; 

    @ViewColumn()
    SupplierID : number ;

    @ViewColumn()
    SupplierName: number ; 

    @ViewColumn()
    mes : number ; 

    @ViewColumn()
    year : number ; 

    @ViewColumn()
    total : number ; 

    @ViewColumn()
    SuperoPromedio : number ; 

    @ViewColumn()
    PorcentajeVentaMensual : number 
    

    

}

