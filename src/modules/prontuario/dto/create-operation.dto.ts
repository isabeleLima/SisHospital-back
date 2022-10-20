import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateOperationDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  PosOperation?: string;

  @IsDateString()
  dateTimeOfAplication: Date;

  @IsString()
  result: string;

  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsString()
  professionalName?: string;
}
