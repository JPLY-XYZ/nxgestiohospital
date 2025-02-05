import { getPacienteById } from "@/lib/data";

async function ItemPaciente({ id }) {
  const paciente = await getPacienteById(id);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Paciente con Id {paciente.id}
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-semibold">Nombre:</span> {paciente.nombre}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-semibold">Fecha de Nacimiento:</span> {new Date(paciente.fecha_nacimiento).toISOString().split('T')[0]}
        </p>
      </div>
    </>
  );
}

export default ItemPaciente;

