import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config()

const host = process.env.MYSQL_ADDON_HOST;
const port = process.env.MYSQL_ADDON_PORT;
const user = process.env.MYSQL_ADDON_USER;
const password = process.env.MYSQL_ADDON_PASSWORD;
const database = process.env.MYSQL_ADDON_DB;
//console.log(host, port, user, password, database, "mysql")

const pool = mysql.createPool({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database,
    waitForConnections: true,
    queueLimit: 0,
    connectionLimit: 5
})


// const pool = mysql.createPool({
//     host: "localhost",
//     port: "3306",
//     user: "root",
//     password: "root",
//     database: "carta_intercomidas"
//     waitForConnections: true,
//     queueLimit: 0,
//     connectionLimit: 5
// })


export const consultaSQL = async (texto, parametros = []) => {
    const conexion = await pool.getConnection();
    try {
        const [resultados] = await conexion.query(texto, parametros);
        return resultados;
    } catch (err) {
        throw err;
    } finally {
        if (conexion) conexion.release();
    }
}