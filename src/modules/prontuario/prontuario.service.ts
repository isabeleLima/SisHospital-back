import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProntuarioDto } from '../prontuario/dto/prontuario.dto';
import { Prontuario } from '../prontuario/prontuario.entity';
import { Repository } from 'typeorm';
import { CreateMedicationDto } from './dto/create-medication.dto';

@Injectable()
export class ProntuarioService {
  constructor(
    @InjectRepository(Prontuario)
    private readonly prontuarioRepository: Repository<Prontuario>,
  ) {}

  async create(data: ProntuarioDto): Promise<Prontuario> {
    try {
      return this.prontuarioRepository.save(data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  findAll(): Promise<Prontuario[]> {
    return this.prontuarioRepository.find({
      relations: {
        paciente: true,
      },
    });
  }

  findOne(id: string): Promise<Prontuario> {
    try {
      return this.prontuarioRepository.findOneByOrFail({ id });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async remove(id: string): Promise<any> {
    try {
      const user = await this.prontuarioRepository.findOneByOrFail({ id });

      await this.prontuarioRepository.delete(user.id).catch(() => {
        throw new InternalServerErrorException();
      });

      return {
        message: 'Prontuario deleted successfully',
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
