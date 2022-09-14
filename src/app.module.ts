import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { UsersService } from './user/user.service';
import { Prontuario } from './model/prontuario/prontuario.entity';
import { Paciente } from './model/paciente/paciente.entity';
import { ProntuarioService } from './service/prontuario/prontuario.service';
import { PacienteService } from './service/paciente/paciente.service';
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
    TypeOrmModule.forFeature([
			User, Paciente, Prontuario
		]),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [UsersService, User, ProntuarioService, PacienteService],
})
export class AppModule {}
