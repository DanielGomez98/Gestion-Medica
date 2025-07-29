import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, UserGroupIcon, CalendarIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Gestión Médica</h1>
        <div className="flex space-x-8">
          <Link to="/" className="flex items-center space-x-2 px-6 py-2 rounded-md hover:bg-blue-400 transition-colors">
            <HomeIcon className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/pacientes" className="flex items-center space-x-2 px-6 py-2 rounded-md hover:bg-blue-400 transition-colors">
            <UserGroupIcon className="h-5 w-5" />
            <span>Pacientes</span>
          </Link>
          <Link to="/medicos" className="flex items-center space-x-2 px-6 py-2 rounded-md hover:bg-blue-400 transition-colors">
            <ClipboardDocumentListIcon className="h-5 w-5" />
            <span>Médicos</span>
          </Link>
          <Link to="/citas" className="flex items-center space-x-2 px-6 py-2 rounded-md hover:bg-blue-400 transition-colors">
            <CalendarIcon className="h-5 w-5" />
            <span>Citas</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
