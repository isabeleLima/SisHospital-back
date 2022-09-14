import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PacienteDto } from "src/model/paciente/dto/paciente.dto";
import { PacienteService } from "src/service/paciente/paciente.service";

@Controller('paciente')
export class PacienteController {
    constructor(private readonly pacienteService: PacienteService) {}

    @Post('create')
    async create(@Body('paciente') paciente: PacienteDto) {
        return this.pacienteService.save(paciente);
    }

    @Get('/:id')
    async findById(@Param() params) {
        return this.pacienteService.findOne(params.id);
    }

    @Delete('delete/:id')
    async remove(@Param() params) {
        return this.pacienteService.remove(params.id);
    }
}