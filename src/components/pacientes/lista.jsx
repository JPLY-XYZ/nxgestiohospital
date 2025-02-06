import { getAllPacientes, getAllPlantas } from "@/lib/data";
import { BadgeX, CircleX, Eye, PencilLine } from "lucide-react";
import Link from "next/link";
import Modal from "../modal";
import PacienteEliminar from "./eliminar";
import PacienteModificar from "./modificar";

async function PacientesLista() {
  const pacientes = await getAllPacientes();
  const plantas = await getAllPlantas();

  return (
    <>
      <h1 className="text-3xl font-bold mt-10">LISTA DE PACIENTES</h1>

      <table className="table-auto w-full mt-5 border-collapse border shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Nombre</th>
            <th className="px-4 py-2 border">Fecha de Nacimiento</th>
            <th className="px-4 py-2 border">Planta</th>
            <th className="px-4 py-2 border">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr
              key={paciente.id}
              className="border hover:bg-purple-100 hover:text-black"
            >
              <td className="border px-4 py-2">{paciente.nombre}</td>
              <td className="border px-4 py-2">
                {paciente.fecha_nacimiento.toISOString().split("T")[0]}
              </td>
              <td className="border px-4 py-2">
                {paciente.plantaId && plantas.find((planta) => planta.id === paciente.plantaId).nombre}
              </td>
              <td className="border px-4 py-2 text-center flex flex-col items-center gap-3">
                <Link
                  className="flex gap-4  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                  href={`/pacientes/${paciente.id}`}
                >
                  <Eye />
                </Link>
                <Modal openElement={
          <h1 className="flex gap-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">ELIMINAR <BadgeX /></h1>
          }>
            <PacienteEliminar id={paciente.id} />          
        </Modal>
        <Modal openElement={
          <h1 className="flex gap-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700">MODIFICAR <PencilLine /></h1>
          }>
            <PacienteModificar paciente={paciente} plantas={plantas} />          
        </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {pacientes.length === 0 && (
        <div className="flex mt-4 gap-4">
          <CircleX className="animate-pulse" />
          NO HAY DATOS PARA MOSTRAR <CircleX className="animate-pulse" />
        </div>
      )}
    </>
  );
}

export default PacientesLista;
