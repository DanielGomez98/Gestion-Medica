import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; 
import Pacientes from "./pages/Pacientes";
import Citas from "./pages/Citas";
import Medicos from "./pages/Medicos"; 
import Navbar from "./components/Navbar";
import AgregarPaciente from "./pages/AgregarPaciente";
import DetallePaciente from "./pages/DetallePaciente";
import EditarPaciente from "./pages/EditarPaciente";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/medicos" element={<Medicos />} />
          <Route path="/citas" element={<Citas />} />

          <Route path="/pacientes/agregar" element={<AgregarPaciente />} />
          <Route path="/pacientes/detalle/:id" element={<DetallePaciente />} />
          <Route path="/pacientes/editar/:id" element={<EditarPaciente />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
