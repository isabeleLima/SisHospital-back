import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private User: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.User.find();
  }

  findOne(id: string): Promise<User> {
    try {
      return this.User.findOneByOrFail({ id });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  findByEmail(email: string): Promise<User> {
    try {
      return this.User.findOneByOrFail({ email });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const user = await this.User.findOneByOrFail({ id });

      await this.User.delete(user.id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async create(user: CreateUserDto): Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);
    return this.User.save(user);
  }
}
