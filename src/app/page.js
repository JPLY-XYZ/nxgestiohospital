import { BriefcaseMedical, Building, UserPen } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mb-8">GESTION DEL HOSPITAL</h1>
      <h2 className="text-1xl font-bold mb-8">HECHO POR JPLY-XYZ</h2>
      <div className="space-y-4">
        <Link className=" flex gap-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" href="/medicinas">MEDICINAS <BriefcaseMedical /></Link>
        <Link className="flex gap-4  px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" href="/pacientes">PACIENTES <UserPen /></Link>
        <Link className="flex gap-4  px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700" href="/plantas"> PLANTAS <Building /></Link>
      </div>
    </div>
  );
}
