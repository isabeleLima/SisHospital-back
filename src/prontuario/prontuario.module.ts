import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prontuario } from './prontuario.entity';
import { ProntuarioService } from './prontuario.service';
import { ProntuarioController } from './prontuario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Prontuario])],
  providers: [ProntuarioService],
  exports: [ProntuarioService],
  controllers: [ProntuarioController],
})
export class ProntuarioModule {}
