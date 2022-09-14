import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Paciente } from "src/model/paciente/paciente.entity";
import { Repository } from "typeorm";

@Injectable()
export class PacienteService {
    constructor(@InjectRepository(Paciente) private readonly pacienteRepository: Repository<Paciente>) {}

    async save(data: any): Promise<Paciente> {
        return this.pacienteRepository.save(data);
    }

    async findOne(condition: any): Promise<Paciente> {
        return this.pacienteRepository.findOne(condition);
    }
}