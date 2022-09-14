import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ProntuarioDto } from "src/model/prontuario/dto/prontuario.dto";
import { ProntuarioService } from "src/service/prontuario/prontuario.service";

@Controller('prontuario')
export class ProntuarioController {
    constructor(private readonly prontuarioService: ProntuarioService) {}

    @Post('create')
    async create(@Body('prontuario') prontuario: ProntuarioDto) {
        return this.prontuarioService.save(prontuario);
    }

    @Get('/:id')
    async findById(@Param() params) {
        return this.prontuarioService.findOne(params.id);
    }

    @Delete('delete/:id')
    async remove(@Param() params) {
        return this.prontuarioService.remove(params.id);
    }
}