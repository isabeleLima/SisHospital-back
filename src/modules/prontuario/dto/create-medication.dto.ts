import { IsBoolean, IsEnum, IsString, IsUUID } from 'class-validator';
import { MeasurementEnum } from '../../../commons/enums/measurement.enum';

export class CreateMedicationDto {
  @IsEnum(MeasurementEnum)
  measurement: string;

  @IsString()
  name?: string;

  @IsBoolean()
  return: boolean;

  @IsUUID()
  userId: string;
}
