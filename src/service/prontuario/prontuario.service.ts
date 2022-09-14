import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Prontuario } from "src/model/prontuario/prontuario.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProntuarioService {
    constructor(@InjectRepository(Prontuario) private readonly prontuarioRepository: Repository<Prontuario>) {}

    async save(data: any): Promise<Prontuario> {
        return this.prontuarioRepository.save(data);
    }

    async findOne(condition: any): Promise<Prontuario> {
        return this.prontuarioRepository.findOne(condition);
    }
}