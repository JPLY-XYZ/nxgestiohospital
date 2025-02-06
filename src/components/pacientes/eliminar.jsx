import { eliminarMedicina } from "@/lib/actions";
import { Trash2 } from "lucide-react";

function PacienteEliminar({estilosBoton,id}) {
  return (
    <form action={eliminarMedicina}>
      <input type="hidden" name="id" defaultValue={id} />
      <button className={estilosBoton}>
        ELIMINAR <Trash2 />
      </button>
    </form>
  );
}

export default PacienteEliminar;

