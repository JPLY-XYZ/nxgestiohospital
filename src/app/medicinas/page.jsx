import MedicinasLista from "@/components/medicinas/lista";
import { Home } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function medicinas() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5">
        <Link
          className="flex gap-3 m-auto text-blue-500 hover:text-blue-700"
          href="/"
        >
         <Home /> <b>IR AL INICIO</b>
        </Link>
        <h1>LISTA DE MEDICINAS</h1> 
        <Suspense
          fallback={
            <div className="skeleton h-60 mt-10  w-full text-center">
              CARGANDO DATOS DE LAS ASIGNATURAS
            </div>
          }
        >
          <MedicinasLista />
        </Suspense>
      </div>
    </>
  );
}

export default medicinas;
