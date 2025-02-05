
// PLANTAS

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

async function insertarPlanta(formData) {
    await prisma.planta.create({
        data: {
            nombre: formData.get('nombre'),
            jefe_planta: formData.get('jefe_planta')
        }
    });
    revalidatePath('/plantas');
}

async function modificarPlanta(formData) {
    await prisma.planta.update({
        where: { id: +formData.get('id') },
        data: {
            nombre: formData.get('nombre'),
            jefe_planta: formData.get('jefe_planta')
        }
    });
    revalidatePath('/plantas/' + +formData.get('id'));
}

async function eliminarPlanta(formData) {
    await prisma.planta.delete({
        where: { id: +formData.get('id') }
    });
    revalidatePath('/plantas');
}

// PACIENTES

async function insertarPaciente(formData) {
    await prisma.paciente.create({
        data: {
            nombre: formData.get('nombre'),
            fecha_nacimiento: new Date(formData.get('fecha_nacimiento')),
            plantaId: +formData.get('plantaId')
        }
    });
    revalidatePath('/pacientes');
}

async function modificarPaciente(formData) {
    await prisma.paciente.update({
        where: { id: +formData.get('id') },
        data: {
            nombre: formData.get('nombre'),
            fecha_nacimiento: new Date(formData.get('fecha_nacimiento')),
            plantaId: +formData.get('plantaId')
        }
    });
    revalidatePath('/pacientes/' + +formData.get('id'));
}

async function eliminarPaciente(formData) {
    await prisma.paciente.delete({
        where: { id: +formData.get('id') }
    });
    revalidatePath('/pacientes');
}

// MEDICINAS

async function insertarMedicina(formData) {
    await prisma.medicina.create({
        data: {
            nombre: formData.get('nombre'),
            via: formData.get('via')
        }
    });
    revalidatePath('/medicinas');
}

async function modificarMedicina(formData) {
    await prisma.medicina.update({
        where: { id: +formData.get('id') },
        data: {
            nombre: formData.get('nombre'),
            via: formData.get('via')
        }
    });
    revalidatePath('/medicinas/' + +formData.get('id'));
}

async function eliminarMedicina(formData) {
    await prisma.medicina.delete({
        where: { id: +formData.get('id') }
    });
    revalidatePath('/medicinas');
}

export { insertarPlanta, modificarPlanta, eliminarPlanta, insertarPaciente, modificarPaciente, eliminarPaciente, insertarMedicina, modificarMedicina, eliminarMedicina };