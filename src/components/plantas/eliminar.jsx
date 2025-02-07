'use client'
import { eliminarPlanta } from "@/lib/actions";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useId } from "react";
import { toast } from "sonner";

function PlantaEliminar({id}) {

  const { refresh } = useRouter()
  const formId = useId();

  const [state, action, pending] = useActionState(eliminarPlanta, {});

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      refresh()     
      document.getElementById(formId).closest('dialog')?.close() 
    }
  }, [state]);

  return (
    <form action={action} id={formId}>
      <input type="hidden" name="id" defaultValue={id} />
      <button className="flex gap-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
        CONFIRMAR ELIMINAR <Trash2 />
      </button>
    </form>
  );
}

export default PlantaEliminar;

