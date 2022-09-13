import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}
  @Get()
  async index() {
    return this.userService.findAll();
  }

  @Get('/:id')
  async findById(@Param() params) {
    return this.userService.findOne(params.id);
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
  @Delete('/:id')
  async remove(@Param() params) {
    return this.userService.remove(params.id);
  }
}
