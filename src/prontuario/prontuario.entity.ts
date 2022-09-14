import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('prontuario')
export class Prontuario {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public aberto: boolean;
    
    @Column()
    public observacao: string;
    
    @Column()
    public retorno: boolean;
}