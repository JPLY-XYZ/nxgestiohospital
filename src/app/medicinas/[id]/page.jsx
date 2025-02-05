import ItemMedicina from "@/components/medicinas/item";
import { Undo2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

async function PaginaMedicina({ params }) {
  const { id } = await params;
  return (
    <div className="container mx-auto p-4">
      <Link
        className="flex gap-3 items-center text-blue-500 hover:text-blue-700"
        href="/medicinas"
      >
        <Undo2 /> <b>IR ATRAS</b>
      </Link>
      <Suspense
        fallback={
          <div className="skeleton h-32 w-full mt-4">
            CARGANDO DATOS DE LA MEDICINA
          </div>
        }
      >
        <ItemMedicina id={id} />
      </Suspense>
    </div>
  );
}

export default PaginaMedicina;



