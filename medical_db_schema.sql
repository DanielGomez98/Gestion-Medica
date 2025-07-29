
-- Script para crear la base de datos y tablas para el sistema de Gestión Médica

CREATE DATABASE Medical;
GO

USE Medical;
GO

-- Tabla Pacientes
CREATE TABLE Pacientes (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100) NOT NULL,
    Apellido NVARCHAR(100) NOT NULL,
    Email NVARCHAR(150) NOT NULL,
    Telefono NVARCHAR(20) NOT NULL,
    FechaRegistro DATETIME DEFAULT GETDATE()
);
GO

-- Tabla Médicos
CREATE TABLE Medicos (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100) NOT NULL,
    Especialidad NVARCHAR(100) NOT NULL,
    Email NVARCHAR(150) NOT NULL,
    Telefono NVARCHAR(20) NOT NULL,
    FechaRegistro DATETIME DEFAULT GETDATE()
);
GO

-- Tabla Citas
CREATE TABLE Citas (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    PacienteId INT NOT NULL,
    MedicoId INT NOT NULL,
    FechaCita DATE NOT NULL,
    Hora TIME NOT NULL,
    Motivo NVARCHAR(255) NOT NULL,
    Estado NVARCHAR(50) NOT NULL CHECK (Estado IN ('Pendiente', 'Confirmada', 'Cancelada', 'Completada')),
    FOREIGN KEY (PacienteId) REFERENCES Pacientes(Id) ON DELETE CASCADE,
    FOREIGN KEY (MedicoId) REFERENCES Medicos(Id) ON DELETE CASCADE
);
GO

-- Datos iniciales (opcional)
INSERT INTO Medicos (Nombre, Especialidad, Email, Telefono)
VALUES
('Dr. Juan Pérez', 'Cardiología', 'juan.perez@hospital.com', '555-1234'),
('Dra. Ana López', 'Pediatría', 'ana.lopez@hospital.com', '555-5678');
GO
