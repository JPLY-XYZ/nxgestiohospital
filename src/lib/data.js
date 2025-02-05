'use server'

import prisma from "./prisma";

// Consultas para PLANTA
async function getAllPlantas() {
    return await prisma.planta.findMany();
}

async function getPlantaById(id) {
    return await prisma.planta.findUnique({
        where: { id: Number(id) }
    });
}

// Consultas para PACIENTE
async function getAllPacientes() {
    return await prisma.paciente.findMany();
}

async function getPacienteById(id) {
    return await prisma.paciente.findUnique({
        where: { id: Number(id) }
    });
}

// Consultas para MEDICINA
async function getAllMedicinas() {
    return await prisma.medicina.findMany();
}

async function getMedicinaById(id) {
    return await prisma.medicina.findUnique({
        where: { id: Number(id) }
    });
}

export {
    getAllPlantas,
    getPlantaById,
    getAllPacientes,
    getPacienteById,
    getAllMedicinas,
    getMedicinaById
};