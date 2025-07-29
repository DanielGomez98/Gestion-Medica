Gestión Médica
Sistema web para la gestión de pacientes, citas y médicos, con frontend en React + TailwindCSS, backend en Node.js + Express, y base de datos en SQL Server 2019.

Características principales
Gestión de pacientes (alta, edición, detalle).

Gestión de médicos con sus especialidades.

Agendamiento de citas con validación de horarios.

API REST en Node.js + Express conectada a SQL Server 2019.

Frontend moderno y responsive con React + TailwindCSS.

Integración con React Router para manejo de páginas.

Tecnologías utilizadas
Frontend
React.js (con Vite)

Tailwind CSS

React Router DOM

Heroicons

Fetch API para consumir endpoints del backend

Backend
Node.js + Express

mssql (conexión a SQL Server)

dotenv (para variables de entorno)

cors (para habilitar comunicación con el frontend)

Base de datos
SQL Server 2019
Tablas: Pacientes, Medicos, Citas (con relaciones y validaciones).

gestion-medica/
│
├── backend/
│   ├── server.js          # Servidor Express con conexión a SQL Server
│   ├── .env               # Variables de entorno (credenciales DB)
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Rutas principales
│   │   ├── api/Api.js     # Funciones para llamadas al backend
│   │   ├── components/    # Navbar, formularios, etc.
│   │   ├── pages/         # Home, Pacientes, Citas, Médicos
│   │   ├── styles/        # CSS global y Tailwind
│   │   └── main.jsx       # Punto de entrada React
│   ├── tailwind.config.js # Configuración de Tailwind
│   ├── postcss.config.js
│   └── package.json
│
└── medical_db_schema.sql  # Script SQL para crear las tablas


Instalación
1. Clonar el repositorio
bash
Copiar
Editar
git clone https://github.com/tu-usuario/gestion-medica.git
cd gestion-medica
2. Backend
Entrar a la carpeta backend:

bash
Copiar
Editar
cd backend
npm install
Crear el archivo .env con tus credenciales de SQL Server:

ini
Copiar
Editar
DB_USER=Medical
DB_PASSWORD=Medical
DB_SERVER=localhost
DB_NAME=Medical
DB_PORT=1433
Ejecutar el servidor:

bash
Copiar
Editar
npm start
El backend correrá en http://localhost:4000.

3. Frontend
Entrar a la carpeta frontend:

bash
Copiar
Editar
cd ../frontend
npm install
Correr el frontend (Vite):

bash
Copiar
Editar
npm run dev
La app estará disponible en http://localhost:5173.

4. Base de datos
Ejecutar el script medical_db_schema.sql en SQL Server Management Studio para crear las tablas necesarias.

Comandos útiles
Levantar backend: cd backend && npm start

Levantar frontend: cd frontend && npm run dev

Compilar frontend para producción: npm run build (en la carpeta frontend).

Próximas mejoras
Autenticación con JWT y roles (Admin, Doctor, Usuario).

Panel de estadísticas con gráficos.

Notificaciones por correo para citas.

Validación avanzada de formularios.

Autor
Daniel Gómez
Desarrollador de software orientado a aplicaciones web y desktop.



