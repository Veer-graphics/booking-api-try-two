import { PrismaClient } from '@prisma/client';

const createBooking = async (bookingData) => {
    const prisma = await new PrismaClient();
    const { userId, propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus } = bookingData;

    return await prisma.booking.create({
        data: { userId, propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus },
    });
};

export default createBooking;
