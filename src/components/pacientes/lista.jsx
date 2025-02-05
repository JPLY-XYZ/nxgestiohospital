import { getAllPacientes } from "@/lib/data";
import { CircleX } from "lucide-react";

async function PacientesLista() {
    const pacientes = await getAllPacientes();

    return (
        <>
            <h1 className="text-3xl font-bold mt-10">LISTA DE PACIENTES</h1>

            <table className="table-auto w-full mt-5 border-collapse border shadow-lg">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Nombre</th>
                        <th className="px-4 py-2 border">Fecha de Nacimiento</th>
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
                            <td className="border px-4 py-2">{paciente.fecha_nacimiento.toISOString().split('T')[0]}</td>
                            <td className="border px-4 py-2 text-center flex flex-col items-center gap-3">
                                ACCIONES
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
