import { insertarPlanta } from "@/lib/actions";

function PlantaInsertar() {
    return ( <form
          action={insertarPlanta}
          className="flex flex-col items-center justify-center mt-5 gap-3 p-5 border rounded shadow-lg"
        >
          <fieldset>AÑADIR NUEVA PLANTA</fieldset>
          <input
            required
            className="border p-2 rounded w-full text-black"
            name="nombre"
            placeholder="Nombre"
          />
          <input
            required
            className="border p-2 rounded w-full text-black"
            name="jefe_planta"
            placeholder="Jefe de Planta"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Insertar
          </button>
        </form> );
}

export default PlantaInsertar;

