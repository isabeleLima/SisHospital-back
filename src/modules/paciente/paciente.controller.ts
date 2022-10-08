import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PacienteDto } from '../paciente/dto/paciente.dto';
import { PacienteService } from '../paciente/paciente.service';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  async create(@Body() paciente: PacienteDto) {
    return this.pacienteService.create(paciente);
  }

  @Get()
  async index() {
    return this.pacienteService.findAll();
  }

  @Get('/:id')
  async findById(@Param() params) {
    return this.pacienteService.findOne(params.id);
  }

  @Delete('/:id')
  async remove(@Param() params) {
    return this.pacienteService.remove(params.id);
  }
}
