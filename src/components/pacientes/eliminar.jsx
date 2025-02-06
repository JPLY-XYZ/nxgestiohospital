import { eliminarPaciente } from "@/lib/actions";
import { Trash2 } from "lucide-react";

function PacienteEliminar({id}) {
  return (
    <form action={eliminarPaciente}>
      <input type="hidden" name="id" defaultValue={id} />
      <button className="flex gap-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
        CONFIRMAR ELIMINAR <Trash2 />
      </button>
    </form>
  );
}

export default PacienteEliminar;

