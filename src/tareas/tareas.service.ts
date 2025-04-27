import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TareasService {

    constructor(private prisma: PrismaService) { }

    async getTareas() {
        return this.prisma.tareas.findMany();
    }

    async getTarea(id: number) {
        return this.prisma.tareas.findUnique({
            where: { id },
        });
    }

    async createTarea(
        nombre: string,
        descripcion: string,
        fecha: Date,
        estado: boolean) {
        return this.prisma.tareas.create({
            data: {
                nombre,
                descripcion,
                fecha,
                estado
            },
        });
    }

    async updateTarea(
        id: number,
        nombre: string,
        descripcion: string,
        fecha: Date,
        estado: boolean) {
        return this.prisma.tareas.update({
            where: { id },
            data: {
                nombre,
                descripcion,
                fecha,
                estado
            },
        });
    }

    async deleteTarea(id: number) {
        return this.prisma.tareas.delete({
            where: { id },
        });
    }

    async deleteAllTareas() {
        return this.prisma.tareas.deleteMany({});
    }
}