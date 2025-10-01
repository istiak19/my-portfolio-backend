import { prisma } from "../../config/db";

const projectCreated = async (payload: any) => {
    const projectData = typeof payload.data === 'string' ? JSON.parse(payload.data) : payload.data;
    projectData.image = payload.image;
    const pro = await prisma.project.create({
        data: projectData
    });

    return pro;
};

const getProject = async () => {
    const pro = await prisma.project.findMany();
    return pro;
};

const getByProject = async (id: number) => {
    const pro = await prisma.project.findUnique({
        where: { id }
    });

    return pro;
};

const projectDelete = async (id: number) => {
    const pro = await prisma.project.delete({
        where: { id }
    });

    return pro;
};

export const projectService = {
    projectCreated,
    getProject,
    getByProject,
    projectDelete
};