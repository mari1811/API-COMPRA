# API-COMPRA

EJECUCION LOCAL:  
(tener instalado node.js, express, mongoDB) 
-Abrir la terminal de mongoDB y dejarla abierta 
-Acceder a la carpeta por otra terminal 
-Ejecutar el comando "node index.js" 
-En el navegador "http://localhost:8080/api/contacts" 

POST JSON
{"message":"",
"Data":
{
	"_id": ObjectId("5c29905a2b2dad3384e39ae0"),
	"fecha": ISODate("2018-12-31T03:43:22.999Z"),
	"cliente": "Antonio",
	"monto": "1500",
	"__v": 0
}
}

GET JSON
{"status": "exito", 
"message": "Compra realizada!", 
"data":
{
	"_id": ObjectId("5c29905a2b2dad3384e39ae0"),
	"fecha": ISODate("2018-12-31T03:43:22.999Z"),
	"cliente": "Antonio",
	"monto": "1500",
	"__v": 0
}
}
