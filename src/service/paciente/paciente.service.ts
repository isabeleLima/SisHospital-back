import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PacienteDto } from "src/model/paciente/dto/paciente.dto";
import { Paciente } from "src/model/paciente/paciente.entity";
import { Repository } from "typeorm";

@Injectable()
export class PacienteService {
    constructor(@InjectRepository(Paciente) private readonly pacienteRepository: Repository<Paciente>) {}

    async save(data: PacienteDto): Promise<Paciente> {
        return this.pacienteRepository.save(data);
    }

    async findOne(condition: any): Promise<Paciente> {
        return this.pacienteRepository.findOne(condition);
    }

    async remove(id: number): Promise<void> {
        const paciente = await this.pacienteRepository.findOneByOrFail({ id });
        await this.pacienteRepository.delete(paciente.id);
    }
}