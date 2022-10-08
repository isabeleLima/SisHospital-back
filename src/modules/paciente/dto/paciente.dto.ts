import {
  IsArray,
  IsDate,
  IsEmail,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class PacienteDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @Matches(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/, {
    message: 'cpf must match XXX.XXX.XXX-XX',
  })
  cpf: string;

  @IsOptional()
  @Matches(/(^\d{1,2}).(\d{3}).(\d{3})-(\d{1}|X|x$)/, {
    message: 'rg must match XXX.XXX.XXX-XX',
  })
  rg: string;

  @IsOptional()
  @Matches(/(^[0-9]{2})(\s|-)?(9?[0-9]{4})-([0-9]{4}$)/, {
    message: 'telefone must match XXX.XXX.XXX-XX',
  })
  telephone: string;

  @IsOptional()
  @IsDate()
  birth_date: Date;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  bloodType: string;

  @IsOptional()
  @IsArray({ message: 'chronic Diseases must be an array' })
  chronicDisease: string[];

  @IsOptional()
  @IsArray({ message: 'allergies must be an array' })
  allergies: string[];

  @IsOptional()
  @Matches(/(^[0-9]{2})(\s|-)?(9?[0-9]{4})-([0-9]{4}$)/, {
    message: 'emergency contacts must match XXX.XXX.XXX-XX',
  })
  emergencyContacts: string;

  @IsOptional()
  @IsString()
  observation: string;
}
