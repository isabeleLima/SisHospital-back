import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  JwtPayload,
  UserJwtToken,
} from 'src/commons/decorators/jwt-payload.decorator';
import { Public } from 'src/commons/decorators/public-rout.decorator';
import { Roles } from 'src/commons/decorators/roles.decorator';
import { TypesEnum } from 'src/commons/enums/types.enum';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(TypesEnum.ENFERMEIRO)
  @Get()
  async index() {
    try {
      return this.userService.findAll();
    } catch (e) {
      throw e;
    }
  }

  @Get('/:id')
  async findById(@Param() params) {
    return this.userService.findOne(params.id);
  }

  @Public()
  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Delete('/:id')
  async remove(@Param() params) {
    return this.userService.remove(params.id);
  }

  @Put()
  async update(@JwtPayload() payload: UserJwtToken) {
    try {
      return await this.userService.update(payload);
    } catch (e) {
      throw e;
    }
  }
}
