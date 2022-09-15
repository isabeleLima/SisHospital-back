import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PacienteDto } from '../paciente/dto/paciente.dto';
import { Paciente } from '../paciente/paciente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
  ) {}

  async create(data: PacienteDto): Promise<Paciente> {
    return this.pacienteRepository.save(data);
  }

  findOne(id: string): Promise<Paciente> {
    try {
      return this.pacienteRepository.findOneByOrFail({ id });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  findAll(): Promise<Paciente[]> {
    return this.pacienteRepository.find();
  }

  async remove(id: string): Promise<any> {
    try {
      const user = await this.pacienteRepository.findOneByOrFail({ id });

      await this.pacienteRepository.delete(user.id).catch(() => {
        throw new InternalServerErrorException();
      });

      return {
        message: 'user deleted successfully',
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
