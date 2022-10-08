import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { UserJwtToken } from 'src/commons/decorators/jwt-payload.decorator';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    try {
      return this.userRepository.findOneByOrFail({ id });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  findByEmail(email: string): Promise<User> {
    try {
      return this.userRepository.findOneByOrFail({ email });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async remove(id: string): Promise<any> {
    try {
      const user = await this.userRepository.findOneByOrFail({ id });

      await this.userRepository.delete(user.id).catch(() => {
        throw new InternalServerErrorException();
      });

      return {
        message: 'user deleted successfully',
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async create(user: CreateUserDto): Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);
    return this.userRepository.save(user);
  }

  async update(req: any): Promise<any> {
    console.log(req);
    return req;
  }
}
