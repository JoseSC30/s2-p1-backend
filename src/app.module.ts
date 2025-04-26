import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { ProyectosModule } from './proyectos/proyectos.module';

@Module({
  imports: [TareasModule, ProyectosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
