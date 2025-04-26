import {Controller, Get, Post, Put, Delete, Body} from '@nestjs/common';
import { TareasService } from './tareas.service';

@Controller('tareas')
export class TareasController {
    constructor(private readonly tareasService: TareasService) {}

    @Get()
    async getTareas() {
        return this.tareasService.getTareas();
    }

    @Post()
    async createTarea(
        @Body('nombre') nombre: string,
        @Body('descripcion') descripcion: string,
        @Body('fecha') fecha: Date,
        @Body('estado') estado: boolean) {
        return this.tareasService.createTarea(nombre, descripcion, fecha, estado);
    }
}  