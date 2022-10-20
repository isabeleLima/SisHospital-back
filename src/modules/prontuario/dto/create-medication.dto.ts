import {
  IsDate,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { MeasurementEnum } from '../../../commons/enums/measurement.enum';

export class CreateMedicationDto {
  @IsEnum(MeasurementEnum)
  measurement: string;

  value: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  frequency: number; //in hours

  @IsDate()
  createde_at: Date;

  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsString()
  professionalName?: string;
}
