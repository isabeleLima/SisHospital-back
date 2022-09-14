import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('prontuario')
export class Prontuario {
    @PrimaryGeneratedColumn()
    public id: bigint;

    @Column()
    public aberto: boolean;
    
    @Column()
    public observacao: string;
    
    @Column()
    public retorno: boolean;
}