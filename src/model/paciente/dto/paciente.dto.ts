import { IsDate, IsEmail, IsString, Matches } from "class-validator";

export class PacienteDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @Matches(/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/, {
        message: 'cpf must match XXX.XXX.XXX-XX',
    })
    cpf: string;

    @IsDate()
    nascimento

    @IsString()
    endereco: string;
    
    @IsString()
    observacao: string;
}