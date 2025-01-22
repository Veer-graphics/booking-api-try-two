import { PrismaClient } from '@prisma/client';

const deleteBooking = async (id) => {
    const prisma = await new PrismaClient();
    return await prisma.booking.delete({
        where: { id },
    });
};

export default deleteBooking;
