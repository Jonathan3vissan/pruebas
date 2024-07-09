const leer =require("prompt-sync")();
const BASE_DE_DATOS = require ("./conectar")

async function menu() {
    let consulta= "select * from codo;"
let mostrar="def";

mostrar= await BASE_DE_DATOS.conectoDB.query(consulta)
console.log(mostrar);    

}menu();



