import mysql from "mysql2/promise"
import type { Connection } from "mysql2/promise"

export async function createConnection(): Promise<Connection> {
    return await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    })
}
