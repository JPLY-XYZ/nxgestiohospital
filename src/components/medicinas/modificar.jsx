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
        <select
          required
          className="border p-2 rounded w-full text-black"
          name="via"
          defaultValue={medicina.via}
        >
          <option value="oral">Oral</option>
          <option value="intravenosa">Intravenosa</option>
          <option value="dermica">Dérmica</option>
        </select>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
          Modificar
        </button>
      </form>
    );
}

export default MedicinaModificar;
