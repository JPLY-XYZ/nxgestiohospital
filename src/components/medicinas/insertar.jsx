import { insertarMedicina } from "@/lib/actions";
import { getAllPacientes } from "@/lib/data";

async function MedicinaInsertar() {

  const pacientes = await getAllPacientes();

    return ( <form
          action={insertarMedicina}
          className="flex flex-col items-center justify-center mt-5 gap-3 p-5 border rounded shadow-lg"
        >
          <fieldset>AÑADIR NUEVA MEDICINA</fieldset>
          <input
            required
            className="border p-2 rounded w-full text-black"
            name="nombre"
            placeholder="Nombre"
          />
          <select
            required
            className="border p-2 rounded w-full text-black"
            name="via"
          >
            <option value="">Seleccione una via</option>
            <option value="oral">Oral</option>
            <option value="intravenosa">Intravenosa</option>
            <option value="dermica">Dermica</option>
          </select>

          {
                pacientes.map(paciente =>
                    <label key={paciente.id}>
                        <input
                            type="checkbox"
                            name={`paciente${paciente.id}`}
                            value={paciente.nombre} />

                        {paciente.nombre}

                    </label>
                )
            }

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Insertar
          </button>
        </form> );
}

export default MedicinaInsertar;
