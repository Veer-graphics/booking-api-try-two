import { PrismaClient } from "@prisma/client";

const getUser = async (id) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUniqueOrThrow({
        where: { id: id }
    });
    return user;
};

export default getUser;