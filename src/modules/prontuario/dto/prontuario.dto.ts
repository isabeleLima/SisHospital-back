import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { StatusEnum } from '../../../commons/enums/status.enum';

export class ProntuarioDto {
  @IsEnum(StatusEnum)
  status: string;

  @IsOptional()
  @IsString()
  observation?: string;

  @IsBoolean()
  return: boolean;

  @IsUUID()
  pacienteId: string;
}
