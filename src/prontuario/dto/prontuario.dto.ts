import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';
import { StatusEnum } from '../../commons/status.enum';

export class ProntuarioDto {
  @IsEnum(StatusEnum)
  status: string;

  @IsOptional()
  @IsString()
  observation: string;

  @IsBoolean()
  return: boolean;
}
