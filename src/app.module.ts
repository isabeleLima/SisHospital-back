import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { UsersService } from './user/user.service';

import { AuthModule } from './auth/auth.module';

import { Prontuario } from './prontuario/prontuario.entity';
import { ProntuarioModule } from './prontuario/prontuario.module';
import { ProntuarioService } from './prontuario/prontuario.service';

import { Paciente } from './paciente/paciente.entity';
import { PacienteService } from './paciente/paciente.service';
import { PacienteModule } from './paciente/paciente.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      entities: [User, Prontuario, Paciente],
    }),
    TypeOrmModule.forFeature([User, Paciente, Prontuario]),
    UserModule,
    AuthModule,
    ProntuarioModule,
    PacienteModule,
  ],
  controllers: [AppController],
  providers: [UsersService, User, ProntuarioService, PacienteService],
})
export class AppModule {}
