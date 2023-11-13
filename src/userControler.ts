import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";


const prisma = new PrismaClient();

export default {
    async createdUser(req: Request, res: Response) {
        try {
            const { name, email } = req.body;
            let user = await prisma.user.findUnique({ where: { email } });

            if (user) {
                return res.json({
                    error: "Ja existe um usuario com este email cadastrado"
                });
            }
            user = await prisma.user.create({
                data: {
                    name,
                    email,
                },
            });
            return res.json(user);
        } catch (error) { 
            return res.json(error);
        }
    },

    async FindAll(req: Request, res: Response) {
        try {
            const users = await prisma.user.findMany();

            if (!users) {
                return res.json({
                    error: true,
                    message: "Error : Nenhum cliente encontrado!",
                });
            }
            return res.json(users);
        } catch (error) {
            return res.json({ error:"Ocorreu um erro !" });
        }

    },

    async FindOne(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({ where: { id: Number(id) } });
            return res.json(user);
        } catch (error) {
            return res.json({ error });
        }
    },

    async updateAt(req: Request, res: Response){
        try {
            const { id } = req.params;
            const { name, email } = req.body;

            let user = await prisma.user.findUnique({ where: { id: Number(id) } });
            if (!user)
                return res.json({ error: "Não foi possivel encontrar este usuario" });

            user = await prisma.user.update({ where: { id: Number(id) }, data: { name, email } });
            res.json(user);
        } catch (error) {
            res.json({ error });
        }
    },

    async deletedUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({ where: { id: Number(id) } });

            if (!user)
                return res.json({ error: "Não foi possivel encontrar este usuario" });
            await prisma.user.delete({ where: { id: Number(id) } });
            res.json({ message: "Usuario deletado" });
        } catch (error) {
            res.json({ error });
        }
    }

};