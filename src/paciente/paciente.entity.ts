import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paciente')
export class Paciente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  public name: string;

  @Column()
  public birth_date: Date;

  @Column({ unique: true })
  public cpf: string;

  @Column()
  public email: string;

  @Column()
  public address: string;

  @Column({ nullable: true })
  public observation: string;
}
