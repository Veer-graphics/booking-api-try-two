const getUser = async (filter) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUniqueOrThrow({
        where: filter,
    });
    return user;
};

export default getUser;