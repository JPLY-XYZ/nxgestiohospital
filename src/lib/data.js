const { PrismaClient } = require('@prisma/client');
const { prisma } = require('./prisma');
;

// Consultas para PLANTA
async function getAllPlantas() {
    try {
        return await prisma.planta.findMany();
    } catch (error) {
        console.error("Error obteniendo plantas:", error);
        return [];
    } finally {
        await prisma.$disconnect();
    }
}

async function getPlantaById(id) {
    try {
        return await prisma.planta.findUnique({
            where: { id: Number(id) }
        });
    } catch (error) {
        console.error("Error obteniendo planta:", error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}

// Consultas para PACIENTE
async function getAllPacientes() {
    try {
        return await prisma.paciente.findMany();
    } catch (error) {
        console.error("Error obteniendo pacientes:", error);
        return [];
    } finally {
        await prisma.$disconnect();
    }
}

async function getPacienteById(id) {
    try {
        return await prisma.paciente.findUnique({
            where: { id: Number(id) }
        });
    } catch (error) {
        console.error("Error obteniendo paciente:", error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}

// Consultas para MEDICINA
async function getAllMedicinas() {
    try {
        return await prisma.medicina.findMany();
    } catch (error) {
        console.error("Error obteniendo medicinas:", error);
        return [];
    } finally {
        await prisma.$disconnect();
    }
}

async function getMedicinaById(id) {
    try {
        return await prisma.medicina.findUnique({
            where: { id: Number(id) }
        });
    } catch (error) {
        console.error("Error obteniendo medicina:", error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}

export {getAllPlantas, getPlantaById, getAllPacientes, getPacienteById, getAllMedicinas, getMedicinaById};