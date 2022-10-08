import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProntuarioDto } from '../prontuario/dto/prontuario.dto';
import { ProntuarioService } from '../prontuario/prontuario.service';

@Controller('prontuario')
export class ProntuarioController {
  constructor(private readonly prontuarioService: ProntuarioService) {}

  @Post()
  async create(@Body() prontuario: ProntuarioDto) {
    return this.prontuarioService.create(prontuario);
  }

  @Get()
  async index() {
    return this.prontuarioService.findAll();
  }

  @Get('/:id')
  async findById(@Param() params) {
    return this.prontuarioService.findOne(params.id);
  }

  @Delete('/:id')
  async remove(@Param() params) {
    return this.prontuarioService.remove(params.id);
  }
}
