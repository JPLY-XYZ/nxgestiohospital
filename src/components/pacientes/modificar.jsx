import { modificarPaciente } from "@/lib/actions";

function PacienteModificar({ paciente, plantas }) {
    return (  
      <form
        action={modificarPaciente}
        className="flex flex-col items-center justify-center mt-5 gap-3 p-5 border rounded shadow-lg"
      >
        <fieldset>EDITAR PACIENTE</fieldset>
        <input name="id" defaultValue={paciente.id} type="hidden" />
        <input
          required
          className="border p-2 rounded w-full text-black"
          name="nombre"
          defaultValue={paciente.nombre}
        />
        <input
          required
          className="border p-2 rounded w-full text-black"
          name="fecha_nacimiento"
          type="date"
          defaultValue={new Date(paciente.fecha_nacimiento).toISOString().split('T')[0]}
        />

        {/* SE HABIA HECHO EN EL EJERCICIO PREVIO */}
        <select
          required
          className="border p-2 rounded w-full text-black"
          name="plantaId"
          defaultValue={paciente.plantaId}
        >
          <option value="">Seleccione una Planta</option>
          {plantas.map((planta) => (
            <option key={planta.id} value={planta.id}>
              {planta.nombre}
            </option>
          ))}
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Modificar
        </button>
      </form>
    );
}

export default PacienteModificar;

