import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './projects/entities/project.entity';

@Module({
  imports: [
    ProjectsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [Project],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
