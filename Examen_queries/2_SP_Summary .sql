CREATE PROCEDURE example.SP_Summary 
AS

BEGIN 


declare @anio int;

 SET @anio = (SELECT anio from example.settings);

WITH PromedioMes AS (  

SELECT  
        s.SupplierID,
        year(o.OrderDate) as año ,
        month(o.OrderDate) as mes,
        AVG(p.Price * od.Quantity) as promedio_mes
        

FROM example.Orders AS o   

INNER JOIN example.OrderDetails AS od
ON o.OrderID = od.OrderID

INNER JOIN example.Products AS p
ON od.ProductID = p.ProductID

INNER JOIN example.Suppliers AS  s
ON p.SupplierID = s.SupplierID

WHERE p.SupplierID = s.SupplierID AND month(o.OrderDate) = month(o.OrderDate) AND  year(o.OrderDate) = year(o.OrderDate)

GROUP BY    s.SupplierID , 
            year(o.OrderDate) ,
            month(o.OrderDate) 
)


-- tabla final 




insert into example.fact_summary 



Select 
        o.CustomerID,
        c.CustomerName,
        s.SupplierID,
        s.SupplierName,
        MONTH(OrderDate)    AS mes,
        YEAR(OrderDate)     AS year,
        SUM(p.Price * od.Quantity)  AS total
            
 ---- Si el SUM(p.Price * od.Quantity) que es el total 
 ---- es Mayor que el promedio del mes 
 ---- se coloca un 1 en columna de SuperoPromedio 
 ---- si no se pone un 0  

,CASE WHEN SUM(p.Price * od.Quantity)>promedio_mes
THEN  1 ELSE 0 END as SuperoPromedio   

,SUM(p.Price * od.Quantity)/(

		SELECT  SUM(p1.Price * od1.Quantity) 

		FROM example.Orders AS o1

        INNER JOIN example.OrderDetails AS od1
        ON o1.OrderID = od1.OrderID 

		INNER JOIN example.Products AS p1 
        ON od1.ProductID = p1.ProductID

        WHERE o1.CustomerID = o.CustomerID and month(o1.OrderDate) = month(o.OrderDate) and year(o1.OrderDate) = year(o.OrderDate)
		
       GROUP BY    o1.CustomerID ,
                   year(o1.OrderDate),
                   month(o1.OrderDate)
) as PorcentajeVentaMensual

FROM example.Orders AS o
INNER JOIN example.OrderDetails AS od
ON o.OrderID = od.OrderID

INNER JOIN example.Products as p
ON od.ProductID = p.ProductID

INNER JOIN example.Customers as c
ON o.CustomerID = c.CustomerID

INNER JOIN example.Suppliers as s
On p.SupplierID = s.SupplierID

inner JOIN  PromedioMes as m
ON s.SupplierID=m.SupplierID and MONTH(o.OrderDate)= m.mes AND YEAR(o.OrderDate)= m.año


where year(o.OrderDate) = @anio

GROUP By o.CustomerID,
         c.CustomerName,
         s.SupplierID,
         s.SupplierName,
         YEAR(OrderDate), 
         MONTH(OrderDate),
         promedio_mes

end 