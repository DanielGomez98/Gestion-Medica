import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.email.trim()) newErrors.email = "El email es obligatorio.";
    if (!formData.telefono.trim()) newErrors.telefono = "El teléfono es obligatorio.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Datos enviados:", formData);
      alert("Formulario enviado correctamente");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className="bg-white p-6 rounded-md shadow-md w-96 mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Registro de Paciente</h2>

      <label className="block mb-2">
        Nombre:
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full p-2 border rounded mt-1" />
        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
      </label>

      <label className="block mb-2">
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mt-1" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </label>

      <label className="block mb-2">
        Teléfono:
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full p-2 border rounded mt-1" />
        {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
      </label>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
