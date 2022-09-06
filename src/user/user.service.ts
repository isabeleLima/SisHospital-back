import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private User: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.User.find();
  }

  findOne(id: number): Promise<User> {
    return this.User.findOneBy({ id });
  }

  findByEmail(email: string): Promise<User> {
    return this.User.findOneBy({ email });
  }

  async remove(id: string): Promise<void> {
    await this.User.delete(id);
  }
}
