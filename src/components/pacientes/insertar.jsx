import { insertarPaciente} from "@/lib/actions";

function PacienteInsertar() {
    return ( <form
          action={insertarPaciente}
          className="flex flex-col items-center justify-center mt-5 gap-3 p-5 border rounded shadow-lg"
        >
          <fieldset>AÑADIR NUEVO PACIENTE</fieldset>
          <input
            required
            className="border p-2 rounded w-full text-black"
            name="nombre"
            placeholder="Nombre"
          />
          <input
            required
            className="border p-2 rounded w-full text-black"
            name="fecha_nacimiento"
            type="date"
            placeholder="Fecha de Nacimiento"
          />
          <select
            required
            className="border p-2 rounded w-full text-black"
            name="plantaId"
          >
            <option value="">Seleccione una Planta</option>
            {plantas.map((planta) => (
              <option key={planta.id} value={planta.id}>
                {planta.nombre}
              </option>
            ))}
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Insertar
          </button>
        </form> );
}

export default PacienteInsertar;

