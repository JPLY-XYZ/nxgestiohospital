import { modificarPlanta } from "@/lib/actions";

function PlantaModificar({ planta }) {
    return (  
      <form
        action={modificarPlanta}
        className="flex flex-col items-center justify-center mt-5 gap-3 p-5 border rounded shadow-lg"
      >
        <fieldset>EDITAR PLANTA</fieldset>
        <input name="id" defaultValue={planta.id} type="hidden" />
        <input
          required
          className="border p-2 rounded w-full text-black"
          name="nombre"
          defaultValue={planta.nombre}
        />
        <input
          required
          className="border p-2 rounded w-full text-black"
          name="jefe_planta"
          defaultValue={planta.jefe_planta}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Modificar
        </button>
      </form>
    );
}

export default PlantaModificar;

