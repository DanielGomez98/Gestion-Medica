==================================================
          SISTEMA DE GESTIÓN MÉDICA
==================================================

Un sistema web para administrar PACIENTES, MÉDICOS
y CITAS médicas, diseñado con un enfoque moderno 
y responsive. Este proyecto integra:

  - FRONTEND: React + TailwindCSS
  - BACKEND: Node.js + Express
  - BASE DE DATOS: SQL Server 2019
  - API REST: Comunicación entre frontend y backend

--------------------------------------------------
FUNCIONALIDADES DESTACADAS
--------------------------------------------------
✔ Registro y edición de pacientes.  
✔ Gestión de médicos y especialidades.  
✔ Agendamiento de citas con validación de horarios.  
✔ Listado de citas (futuras, pasadas y del día).  
✔ Interfaz moderna y optimizada para móviles.  

--------------------------------------------------
TECNOLOGÍAS UTILIZADAS
--------------------------------------------------
FRONTEND:
  - React (con Vite)
  - React Router DOM
  - Tailwind CSS
  - Heroicons

BACKEND:
  - Node.js + Express
  - mssql (conexión a SQL Server)
  - dotenv (manejo de variables de entorno)
  - cors (para comunicación segura entre front y back)

BASE DE DATOS:
  - SQL Server 2019
  - Tablas: Pacientes, Médicos, Citas

--------------------------------------------------
ESTRUCTURA DEL PROYECTO
--------------------------------------------------
gestion-medica/
│
├── backend/
│   ├── server.js          (Servidor Express)
│   ├── .env               (Variables de entorno)
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx        (Rutas principales)
│   │   ├── api/Api.js     (Funciones API)
│   │   ├── components/    (Navbar, formularios)
│   │   ├── pages/         (Home, Pacientes, Citas)
│   │   └── main.jsx       (Punto de entrada React)
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── medical_db_schema.sql  (Script SQL de tablas)

--------------------------------------------------
CÓMO EJECUTAR EL PROYECTO
--------------------------------------------------
1. Clona el repositorio:
   git clone https://github.com/tu-usuario/gestion-medica.git
   cd gestion-medica

2. Configura el BACKEND:
   cd backend
   npm install
   Crea un archivo .env con tus credenciales de SQL Server:
     DB_USER=Medical
     DB_PASSWORD=Medical
     DB_SERVER=localhost
     DB_NAME=Medical
     DB_PORT=1433
   Levanta el servidor:
     npm start
   El backend estará en: http://localhost:4000

3. Configura el FRONTEND:
   cd ../frontend
   npm install
   Inicia el proyecto:
     npm run dev
   El frontend estará en: http://localhost:5173

4. BASE DE DATOS:
   Ejecuta el script medical_db_schema.sql en tu SQL Server.

--------------------------------------------------
PRÓXIMAS MEJORAS
--------------------------------------------------
- Autenticación con JWT y roles (Admin, Doctor, Usuario).  
- Dashboard con estadísticas y reportes.  
- Envío de notificaciones para citas.  
- Validación avanzada de formularios.

--------------------------------------------------
AUTOR
--------------------------------------------------
Oscar Gómez
Desarrollador de software orientado a aplicaciones
web y desktop con tecnologías modernas.

==================================================
