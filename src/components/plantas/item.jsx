import { getPlantaById } from "@/lib/data";

async function ItemPlanta({ id }) {
  const planta = await getPlantaById(id);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Planta con Id {planta.id}
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-semibold">Nombre:</span> {planta.nombre}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-semibold">Jefe de Planta:</span> {planta.jefe_planta}
        </p>
      </div>
    </>
  );
}

export default ItemPlanta;

