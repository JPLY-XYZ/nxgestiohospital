import { modificarMedicina } from "@/lib/actions";

function MedicinaModificar({ medicina }) {
    return (  
      <form
        action={modificarMedicina}
        className="flex flex-col items-center justify-center mt-5 gap-3 p-5 border rounded shadow-lg"
      >
        <fieldset>EDITAR MEDICINA</fieldset>
        <input name="id" defaultValue={medicina.id} type="hidden" />
        <input
          required
          className="border p-2 rounded w-full text-black"
          name="nombre"
          defaultValue={medicina.nombre}
        />
        <input
          required
          className="border p-2 rounded w-full text-black"
          name="via"
          defaultValue={medicina.via}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Modificar
        </button>
      </form>
    );
}

export default MedicinaModificar;
