import { IsBoolean, IsDate, IsEmail, IsString, Matches } from "class-validator";

export class ProntuarioDto {
    @IsBoolean()
    aberto: boolean;

    @IsString()
    observacao: string;

    @IsBoolean()
    retorno: boolean;
}