import Modal from "@/components/modal";
import PacienteInsertar from "@/components/pacientes/insertar";
import PacientesLista from "@/components/pacientes/lista";
import { Home, Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function pacientes() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5">
        <Link
          className="flex gap-3 m-auto text-blue-500 hover:text-blue-700"
          href="/"
        >
         <Home /> <b>IR AL INICIO</b>
        </Link>
        <h1>LISTA DE PACIENTES</h1> 
        <Modal openElement={
          <h1 className="flex gap-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">AGREGAR PACIENTE NUEVO <Plus /></h1>
          }>
            <PacienteInsertar />          
        </Modal>
        <Suspense
          fallback={
            <div className="skeleton h-60 mt-10 w-full text-center">
              CARGANDO DATOS DE LOS PACIENTES
            </div>
          }
        >
          <PacientesLista />
        </Suspense>
      </div>
    </>
  );
}

export default pacientes;
