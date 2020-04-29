import {ViewEntity, ViewColumn} from "typeorm";


@ViewEntity({schema:"example", database:"Ingreso_vehiculos", name:"ViewSuppliersByNProducts"})

export class ViewSuppliersByNProducts{
    
    @ViewColumn()
    SupplierID: number ; 
    @ViewColumn()
    SupplierName: string ; 
    @ViewColumn()
    number_products: number 

}






/*import {ViewEntity,ViewColumn} from "typeorm";

@ViewEntity({schema: "example", database: "ingresos", name:"ViewSuppliersByNProducts"})
export class ViewSuppliersByNProducts{
    @ViewColumn()
    SupplierID: number
    @ViewColumn()
    SupplierName: string
    @ViewColumn()
    number_products: number
}
*/