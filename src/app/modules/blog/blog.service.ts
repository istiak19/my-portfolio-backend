import { prisma } from "../../config/db";

const blogCreated = async (payload: any) => {
    const blogData = typeof payload.data === 'string' ? JSON.parse(payload.data) : payload.data;
    blogData.image = payload.image;
    const blogs = await prisma.blog.create({
        data: blogData
    });

    return blogs;
};

const getBlog = async () => {
    const blogs = await prisma.blog.findMany();
    return blogs;
};

const getByBlog = async (id: number) => {
    const blogs = await prisma.blog.findUnique({
        where: { id }
    });

    return blogs;
};

const updateBlogById = async (id: number, payload: any) => {
    const blogData = typeof payload.data === 'string' ? JSON.parse(payload.data) : payload.data;
    if (payload.image) {
        blogData.image = payload.image;
    }

    const updatedBlog = await prisma.blog.update({
        where: { id },
        data: blogData,
    });

    return updatedBlog;
};

const deleteBlogById = async (id: number) => {
    return await prisma.blog.delete({
        where: { id }
    });
};

export const blogService = {
    blogCreated,
    getBlog,
    getByBlog,
    updateBlogById,
    deleteBlogById
}; 