import { getMedicinaById } from "@/lib/data";

async function ItemMedicina({ id }) {
  const medicina = await getMedicinaById(id);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Medicina con Id {medicina.id}
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-semibold">Nombre:</span> {medicina.nombre}
        </p>
        <p className="text-lg text-gray-600 mb-2">
          <span className="font-semibold">Via:</span> {medicina.via}
        </p>
      </div>
    </>
  );
}

export default ItemMedicina;
