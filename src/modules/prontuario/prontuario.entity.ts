import { Paciente } from '../paciente/paciente.entity';
import { User } from '../user/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity('prontuario')
export class Prontuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  public status: string;

  @Column({ nullable: true })
  public observation: string;

  @Column()
  public return: boolean;

  @Column('jsonb', { nullable: true })
  public medication?: object[];

  @Column('jsonb', { nullable: true })
  public operations?: object[];

  @OneToOne(() => Paciente)
  @JoinColumn()
  paciente: Paciente;
}
