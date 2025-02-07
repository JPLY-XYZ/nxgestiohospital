'use server'
// PLANTAS

import { revalidatePath } from "next/cache";
import prisma from "./prisma";

async function insertarPlanta(prevState,formData) {
    await prisma.planta.create({
        data: {
            nombre: formData.get('nombre'),
            jefe_planta: formData.get('jefe_planta')
        }
    });
    revalidatePath('/plantas');
    return { success: 'La planta se inserto correctamente' }
}

async function modificarPlanta(prevState,formData) {
    await prisma.planta.update({
        where: { id: +formData.get('id') },
        data: {
            nombre: formData.get('nombre'),
            jefe_planta: formData.get('jefe_planta')
        }
    });
    revalidatePath('/plantas/');
    return { success: 'La planta se modifico correctamente' }
}

async function eliminarPlanta(prevState,formData) {
    await prisma.planta.delete({
        where: { id: +formData.get('id') }
    });
    return { success: 'La planta se elimino correctamente' }
}

// PACIENTES

async function insertarPaciente(prevState,formData) {
    await prisma.paciente.create({
        data: {
            nombre: formData.get('nombre'),
            fecha_nacimiento: new Date(formData.get('fecha_nacimiento')),
            plantaId: +formData.get('plantaId')
        }
    });
    revalidatePath('/pacientes');
    return { success: 'El paciente se inserto correctamente' }
}

async function modificarPaciente(prevState,formData) {
    await prisma.paciente.update({
        where: { id: +formData.get('id') },
        data: {
            nombre: formData.get('nombre'),
            fecha_nacimiento: new Date(formData.get('fecha_nacimiento')),
            plantaId: +formData.get('plantaId')
        }
    });
    revalidatePath('/pacientes/');
    return { success: 'El paciente se modifico correctamente' }
}

async function eliminarPaciente(prevstate,formData) {
    await prisma.paciente.delete({
        where: { id: +formData.get('id') }
    });
    return { success: 'El paciente se elimino correctamente' }
}

// MEDICINAS

async function insertarMedicina(prevState,formData) {

    const pacientesID = await prisma.paciente.findMany( {select: { id: true }} )
    const connect = pacientesID.filter(e => formData.get(`paciente${e.id}`) !== null)
    
    await prisma.medicina.create({
        data: {
            nombre: formData.get('nombre'),
            via: formData.get('via'),
            pacientes: { connect }
        }
    });
    revalidatePath('/medicinas');
    return { success: 'La medicina se inserto correctamente' }
}

async function modificarMedicina(prevState, formData) {

    const pacientesID = await prisma.paciente.findMany( {select: { id: true }} )

    const connect = pacientesID.filter(e => formData.get(`paciente${e.id}`) !== null)
    const disconnect = pacientesID.filter(e => formData.get(`paciente${e.id}`) === null)

    await prisma.medicina.update({
        where: { id: +formData.get('id') },
        data: {
            nombre: formData.get('nombre'),
            via: formData.get('via'),
            pacientes: { 
                connect,
                disconnect
             }
        }
    });
    revalidatePath('/medicinas/');
    return { success: 'La medicina se modifico correctamente' } 

    
}

async function eliminarMedicina(prevState,formData) {
    await prisma.medicina.delete({
        where: { id: +formData.get('id') }
    });
    
    return { success: 'La medicina se elimino correctamente' }
}

export { insertarPlanta, modificarPlanta, eliminarPlanta, insertarPaciente, modificarPaciente, eliminarPaciente, insertarMedicina, modificarMedicina, eliminarMedicina };