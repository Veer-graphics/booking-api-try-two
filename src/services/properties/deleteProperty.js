import { PrismaClient } from "@prisma/client"

const deleteProperty = async (id) => {
    const prisma = await new PrismaClient();
    const deletedProperty = await prisma.property.delete({
        where: { id }
    });

    return deletedProperty ? id : null;
}

export default deleteProperty