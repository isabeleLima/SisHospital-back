import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProntuarioDto } from '../prontuario/dto/prontuario.dto';
import { ProntuarioService } from '../prontuario/prontuario.service';
import { Public } from 'src/commons/decorators/public-rout.decorator';
import { CreateMedicationDto } from './dto/create-medication.dto';
import {
  JwtPayload,
  UserJwtToken,
} from 'src/commons/decorators/jwt-payload.decorator';
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
  @Public()
  @Get('/:id')
  async findById(@Param() params) {
    return this.prontuarioService.findOne(params.id);
  }

  @Delete('/:id')
  async remove(@Param() params) {
    return this.prontuarioService.remove(params.id);
  }

  @Public()
  @Get('qrcode/:id')
  async GenerateQRCode(@Param() params) {
    return this.prontuarioService.generateQRCOde(params.id);
  }

  @Post('addMedication/:id')
  async addMedication(
    @Param() params,
    @Body() medication: CreateMedicationDto,
    @JwtPayload() payload: UserJwtToken,
  ) {
    return this.prontuarioService.addMedication(params.id, payload, medication);
  }
}
