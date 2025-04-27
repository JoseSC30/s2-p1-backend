import { Injectable } from '@nestjs/common';

@Injectable()
export class ProyectosService {
    getProyectos() {
        return [
        {
            id: 1,
            nombre: 'Proyecto 1',
            descripcion: 'Descripción del proyecto 1',
            fechaInicio: new Date('2023-01-01'),
            fechaFin: new Date('2023-12-31'),
        },
        {
            id: 2,
            nombre: 'Proyecto 2',
            descripcion: 'Descripción del proyecto 2',
            fechaInicio: new Date('2023-02-01'),
            fechaFin: new Date('2023-11-30'),
        },
        ];
    }
}
