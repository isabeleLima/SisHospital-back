import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
