import { getAllMedicinas, getAllPacientes } from "@/lib/data";
import { BadgeX, CircleX, Eye, PencilLine} from "lucide-react";
import Link from "next/link";
import MedicinaEliminar from "./eliminar";
import Modal from "../modal";
import MedicinaModificar from "./modificar";

async function MedicinasLista() {
    const medicinas = await getAllMedicinas();
    const pacientes = await getAllPacientes()
  return (
    <>
      <h1 className="text-3xl font-bold mt-10">LISTA DE MEDICINAS</h1>

     

      <table className="table-auto w-full mt-5 border-collapse border shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">Vía</th>
            <th className="px-4 py-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicinas.map((medicina) => (
            <tr
              key={medicina.id}
              className="border hover:bg-purple-100 hover:text-black"
            >
              <td className="border px-4 py-2">{medicina.nombre}</td>
              <td className="border px-4 py-2">{medicina.via}</td>
              <td className="border px-4 py-2 text-center flex flex-col items-center gap-3">
              <Link className="flex gap-4  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" href={`/medicinas/${medicina.id}`}>
                <Eye />
              </Link>
              <Modal openElement={
          <h1 className="flex gap-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">ELIMINAR <BadgeX /></h1>
          }>
            <MedicinaEliminar id={medicina.id} />          
        </Modal>
        <Modal openElement={
          <h1 className="flex gap-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700">MODIFICAR <PencilLine /></h1>
          }>
            <MedicinaModificar medicina={medicina} pacientes={pacientes} />          
        </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {medicinas.length === 0 && (
        <div className="flex mt-4 gap-4">
          <CircleX className="animate-pulse" />
          NO HAY DATOS PARA MOSTRAR <CircleX className="animate-pulse" />
        </div>
      )}
    </>
  );
}

export default MedicinasLista;