import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('paciente')
export class Paciente {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public nome: string;

    @Column()
    public nascimento: Date;

    @Column({ unique: true })
    public cpf: string;

    @Column()
    public email: string;

    @Column()
    public endereco: string;

    @Column()
    public observacao: string;

}