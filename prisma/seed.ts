import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash("Abcd@123", 10);

    await prisma.user.upsert({
        where: { email: "istiak@gmail.com" },
        update: {},
        create: {
            email: "istiak@gmail.com",
            password: hashedPassword,
            name: "Istiak",
            role: "Admin",
        },
    });
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());