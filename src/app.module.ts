import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { User } from './modules/user/user.entity';
import { UserModule } from './modules/user/user.module';
import { UsersService } from './modules/user/user.service';

import { AuthModule } from './modules/auth/auth.module';

import { Prontuario } from './modules/prontuario/prontuario.entity';
import { ProntuarioModule } from './modules/prontuario/prontuario.module';
import { ProntuarioService } from './modules/prontuario/prontuario.service';

import { Paciente } from './modules/paciente/paciente.entity';
import { PacienteService } from './modules/paciente/paciente.service';
import { PacienteModule } from './modules/paciente/paciente.module';

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
  controllers: [],
  providers: [UsersService, User, ProntuarioService, PacienteService],
})
export class AppModule {}
