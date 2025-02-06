import { insertarMedicina } from "@/lib/actions";

function MedicinaInsertar() {
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
          <input
            required
            className="border p-2 rounded w-full text-black"
            name="via"
            placeholder="Via"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Insertar
          </button>
        </form> );
}

export default MedicinaInsertar;
