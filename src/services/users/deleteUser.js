import { PrismaClient } from "@prisma/client"

const deleteUser = async (id) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.delete({
        where: { id }
    });

    return user ? id : null;
}

export default deleteUser