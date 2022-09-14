import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProntuarioDto } from "src/prontuario/dto/prontuario.dto";
import { Prontuario } from "src/prontuario/prontuario.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProntuarioService {
    constructor(@InjectRepository(Prontuario) private readonly prontuarioRepository: Repository<Prontuario>) {}

    async save(data: ProntuarioDto): Promise<Prontuario> {
        return this.prontuarioRepository.save(data);
    }

    async findOne(condition: any): Promise<Prontuario> {
        return this.prontuarioRepository.findOne(condition);
    }

    async remove(id: number): Promise<void> {
        const prontuario = await this.prontuarioRepository.findOneByOrFail({ id });
        await this.prontuarioRepository.delete(prontuario.id);
    }
}