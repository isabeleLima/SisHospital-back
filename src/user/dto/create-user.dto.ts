import { IsString, IsEmail, IsEnum, Matches } from 'class-validator';
import { TypesEnum } from 'src/commons/typs.enum';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  password: string;

  @Matches(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/, {
    message: 'cpf must match XXX.XXX.XXX-XX',
  })
  cpf: string;

  @IsEnum(TypesEnum)
  type: string;
}
