import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProntuarioDto } from '../prontuario/dto/prontuario.dto';
import { Prontuario } from '../prontuario/prontuario.entity';
import { Repository } from 'typeorm';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { UserJwtToken } from 'src/commons/decorators/jwt-payload.decorator';
import { CreateOperationDto } from './dto/create-operation.dto';
import * as QRCode from 'qrcode';
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

  async addMedication(
    id: string,
    user: UserJwtToken,
    medication: CreateMedicationDto,
  ): Promise<Prontuario> {
    try {
      const prontuario = await this.prontuarioRepository.findOneByOrFail({
        id,
      });
      medication.userId = user.id;
      medication.professionalName = user.name;
      if (!prontuario.medication) {
        prontuario.medication = [];
      }
      prontuario.medication.push(medication);
      this.prontuarioRepository.save(prontuario);

      return prontuario;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async addOperation(
    id: string,
    user: UserJwtToken,
    operation: CreateOperationDto,
  ): Promise<Prontuario> {
    try {
      const prontuario = await this.prontuarioRepository.findOneByOrFail({
        id,
      });

      operation.userId = user.id;
      operation.professionalName = user.name;

      if (!prontuario.operations) {
        prontuario.operations = [];
      }
      prontuario.operations.push(operation);
      this.prontuarioRepository.save(prontuario);

      return prontuario;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async generateQRCOde(id: string) {
    try {
      console.log(id);
      const prontuario = await this.prontuarioRepository.find({
        relations: ['paciente'],
        where: {
          id: id,
        },
      });
      if (!prontuario[0]) {
        throw new Error('prontuario não encontrado');
      }

      const urlToProntuario = `localhost:3000/prontuario/${prontuario[0].id}`;

      QRCode.toFile(`src/qrCodes/${prontuario[0].id}.png`, urlToProntuario);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
