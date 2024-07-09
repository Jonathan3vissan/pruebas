const { createConnection } =require("mysql2/promise")
const leer =require("prompt-sync")();

async function conexionEstablecida() {
    const conexionBaseDatos = await conectarBD();
    console.log(conexionBaseDatos);
    conexionBaseDatos.end();
}

async function conectarBD() {
    return await createConnection({
        host: 'localhost',
        user: 'root',
        database: 'gimnasio',
        password: `******`,
    });
}

console.log(conexionBaseDatos.query("select * from codo;"));

conexionEstablecida();



module.exports={
conectoDB: conexionEstablecida
}