import { eliminarPlanta } from "@/lib/actions";
import { Trash2 } from "lucide-react";

function PlantaEliminar({estilosBoton,id}) {
  return (
    <form action={eliminarPlanta}>
      <input type="hidden" name="id" defaultValue={id} />
      <button className={estilosBoton}>
        ELIMINAR <Trash2 />
      </button>
    </form>
  );
}

export default PlantaEliminar;

