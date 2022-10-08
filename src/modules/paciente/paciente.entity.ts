import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paciente')
export class Paciente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 'jhon doe' })
  public name: string;

  @Column({ nullable: true })
  public birth_date: Date;

  @Column({ unique: true, nullable: true })
  public cpf: string;

  @Column({ unique: true, nullable: true })
  public rg: string;

  @Column({ nullable: true })
  public email: string;

  @Column({ nullable: true })
  public telephone: string;

  @Column({ nullable: true })
  public address: string;

  @Column({ nullable: true })
  public bloodType: string;

  @Column('simple-array', { nullable: true })
  public chronicDisease: string[];

  @Column('simple-array', { nullable: true })
  public allergies: string[];

  @Column({ nullable: true })
  public emergencyContacts: string;

  @Column({ nullable: true })
  public observation: string;
}
