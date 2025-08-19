import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSOWRD || 'root1234',
    database: process.env.DB_NAME || 'calcularindiceacademicounet',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function testConnection() {
    try {
        const connection = await pool.getConnection()
        console.log('🎉 Conexión exitosa a la base de datos MySQL!');
        connection.release(); // Libera la conexión de vuelta al pool
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos:', error);
        process.exit(1); // Sale de la aplicación si no puede conectar
    }
}

testConnection();

export default pool;