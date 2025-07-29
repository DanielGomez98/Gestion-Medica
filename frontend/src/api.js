const API_URL = "http://localhost:4000";

const fetchData = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error ${res.status}: ${errorText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error en la API:", error);
    throw error;
  }
};

export const getPacientes = async () => fetchData(`${API_URL}/pacientes`);

export const addPaciente = async (paciente) =>
  fetchData(`${API_URL}/pacientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paciente),
  });

export const getMedicos = async () => fetchData(`${API_URL}/medicos`);

export const addMedico = async (medico) =>
  fetchData(`${API_URL}/medicos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(medico),
  });

export const agendarCita = async (cita) => {
  const res = await fetch(`${API_URL}/citas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cita),
  });
  return res.json();
};

export const getPacienteById = async (id) => {
  const res = await fetch(`${API_URL}/pacientes/${id}`);
  return res.json();
};
