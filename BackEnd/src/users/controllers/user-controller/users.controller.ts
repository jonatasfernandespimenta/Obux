import { Controller, Post, Body, Get, Put, Delete, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';
import { CreateUserDto } from '../../dtos/user-dtos/createuser.dto';
import { LoginDto } from '../../dtos/user-dtos/login.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {

  constructor(
    private readonly user: UserService,
    private readonly auth: AuthService
  ) {  }

  @Get(':id')
  getUser(@Param() params) {
    return this.user.getUser(params.id);
  }

  @Get('/')
  getUsers() {
    return this.user.getUsers();
  }

  @Get('hello')
  getHello() {
    return 'Hello World!';
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
  uploadSingle(@UploadedFile() file) {
    console.log(file)
  }

  @Post('create')
  createUser(@Body() newUser: CreateUserDto) {
    return this.user.createUser(newUser);
  }

  @Post('login')
  async userLogin(@Body() userCredentials: LoginDto) {
    return this.auth.login(userCredentials);
  }

  @Post('isemailavailable')
  async isAvailable(@Body() email) {
    return this.user.isEmailAvailable(email);
  }

  @Delete('deluser/:id')
  delUser(@Param() params) {
    return this.user.deleteUser(params.id);
  }

}
