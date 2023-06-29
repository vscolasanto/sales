import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UserController {
  @Post('/')
  createUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
