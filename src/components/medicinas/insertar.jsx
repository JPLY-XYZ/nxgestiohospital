'use client'

import { insertarMedicina } from "@/lib/actions";
import { useActionState, useEffect, useId } from "react";
import { toast } from "sonner";

function MedicinaInsertar({pacientes}) {

  const formId = useId();

  const [state, action, pending] = useActionState(insertarMedicina, {});

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      document.getElementById(formId).closest('dialog')?.close() 
    }
  }, [state]);

    return ( <form
          action={action} id={formId}
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

          <button disabled={pending} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Insertar
          </button>
        </form> );
}

export default MedicinaInsertar;
