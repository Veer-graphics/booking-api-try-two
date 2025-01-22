import { PrismaClient } from "@prisma/client"

const deleteHost = async (id) => {
    const prisma = new PrismaClient();

    try {
        const host = await prisma.host.delete({
            where: { id }
        });
        return host;
    } catch (error) {
        return null;
    }
}

export default deleteHost;