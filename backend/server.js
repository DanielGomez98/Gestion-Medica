require('dotenv').config();
const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const dbConfig = {
    user: 'Medical',
    password: 'Medical',
    server: 'localhost',
    database: 'Medical',
    options: { trustServerCertificate: true }
};

sql.connect(dbConfig).then(pool => {
    if (pool.connecting) {
        console.log('Conectando a SQL Server...');
    } else {
        console.log('Conectado a SQL Server.');
    }
}).catch(err => console.log('Error de conexión:', err));

// Aquí irán tus endpoints (pacientes, médicos, citas)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
